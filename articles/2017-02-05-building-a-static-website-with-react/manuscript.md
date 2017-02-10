# Building a static website with React
*5th February 2017*

I have been using React to build sites for nearly two years. It's a valuable tool for making cutting-edge software with vibrant user experiences and I have grown used to using it. It's not normally the tool you would use for a small development blog, but how would you go about using it if you did?

React is famous for introducing universally rendered JS components - HTML content rendered symmetrically on the server and in the browser. Rendering components only in the browser can be slow, and doing part of it on the server is a useful shortcut.

```
let output = ReactDOM.renderToString(
  <div>
    <h1>Hello World</h1>
  </div>
);
```

This makes React a useful HTML templating tool that we can use in the same role as Handlebars, Twig or Haml. React is remarkably relaxed about how and where you use it, and I want to take advantage of this as the basis of my super-modern static site generator.

I also have an ulterior motive. Much has been said about using tools like React to make sophisticated "single page apps". While it is true that React is a superb tool for this, there is a majority of developers who don't work on SPAs who really want to know what the latest tools can do for them.

## Gulp
Before we get started with React, we need a static site generator to build our site around. The only one I've used before is [Jekyll](https://jekyllrb.com/), which is a great tool for beginners but its prescriptive design doesn't give me any options to use my own tools. On the other hand, Gulp is designed especially for producing bespoke sites and its library of plugins allows me to replicate common static site features such as Markdown parsing.

[gulp-markdown](https://www.npmjs.com/package/gulp-markdown) is used just for this purpose. It transforms markdown files into HTML, and is the first step in turning my articles into web pages.

I use [gulp-rename](https://www.npmjs.com/package/gulp-rename) to strip date prefixes from the folders that contain my articles. I also use it to rename the main article files to `index.html` to make requests to `article-name/index.html` load with a friendly URL like `www.katiefenn.co.uk/article-name/`.

[gulp-sort](https://www.npmjs.com/package/gulp-sort) orders my articles so that they appear in my index files in reverse date order, using the date prefixes on the article directory names.

[gulp-filter](https://www.npmjs.com/package/gulp-filter) is useful for making Gulp ignore other files stored with my articles, such as images and notes that I don't want to publish.

[gulp-replace](https://www.npmjs.com/package/gulp-replace) is perfect for adding permalinks to article headings.

These plugins are *almost* enough to make a basic static site work, all that's left is to inject the processed content into an HTML template to make it look nice. [gulp-handlebars](https://www.npmjs.com/package/gulp-filter) is a good way of doing this normally, but this is where I start doing things differently.

## Custom render-to-html plugin
As far as I know, there are no Gulp plugins to render piped HTML content into React components (know better? [Let me know!](http://twitter.com/katie_fenn)). The custom plugin I wrote for doing this, [gulp-render-to-string](https://www.npmjs.com/package/gulp-render-to-string), takes HTML piped into it, creates a new instance of a React element with props from its arguments, and renders it to a string.

```
// Inject article content into site templates
// (server-rendered React components)
.pipe(jsxTemplate(PageIndex, {
  pageCount: Math.ceil(articleCount / ARTICLES_PER_PAGE)
}))
.pipe(jsxTemplate(Page))
```

Looking inside the source of the plugin, we can see that it encapsulates `ReactDom.renderToString`:

```
let contents = file.contents.toString("utf8");
let output = ReactDOM.renderToString(
  <Component {...props}>
    { contents }
  </Component>
);

file.contents = new Buffer(output);
```

There's just one part of the puzzle missing for making a working blog: paginated index pages.

## Custom pagination plugin
Navigation of articles on my site has always been through collating articles into numbered pages. It's a common method of navigating blog-like sites, and I am somewhat surprised that a Gulp plugin does not exist to do this.

I created another custom Gulp plugin, [gulp-paginate](https://www.npmjs.com/package/gulp-paginate), that holds files piped into it until the number of articles held reaches a configurable articles-per-page setting. It then creates a new file with content from each file it holds appended together.

## CSS Modules and PostCSS
CSS Modules is one of the most exciting new developments in the world of CSS. It is a suite of tools that protect styles from being freely overwritten. This helps reduce the problem of unexpected side-effects when making changes to a site's styles. It also compliments building a site with React, by placing a focus on reusable user interface components instead of reusable styles.

CSS Modules is supported by both [PostCSS](http://postcss.org/) and [WebPack](https://webpack.github.io/). I decided not to use WebPack because my site has few client-side assets that need bundling. PostCSS is ideal in this case, it can pre-process modular stylesheets for a static website and is easier to set up than WebPack.

When PostCSS processes my stylesheets, it transforms classnames to make them unique. It's a similar process to the [BEM](http://getbem.com/) naming convention in that it adds a postfix to classes to reduce the likelihood of style being overwritten. In order to use the new classnames in my React components, PostCSS creates a JSON file that maps the old classes to the new:

```
import React from 'react';
const styles = require('./styles.css.json');

export default function(props) {
  return (
    <article className={ styles.article } />
  );
};
```

The end result HTML looks like this:

```
<article class="_article_1jkjk_1">
  <h1>Building a static website with React</h1>
  ...
</article>
```

Gulp then concatenates stylesheets together into a single file to be served on the web.

## Automating builds and deployment with Travis CI
One of the pain points of making a static website in the past was the manual process of generating and deploying the site whenever content changed. [Travis CI](https://travis-ci.org/) once again proves an invaluable frontend development tool by doing this bit for me.

My introduction to CI was a service than ran unit tests on my code whenever I pushed to GitHub. The sheer flexibility of modern CI services (such as Travis) allows them to do much more than this. Whenever I push a change to [my site's repository](https://github.com/katiefenn/website-2017-src) on GitHub, Travis builds my site and deploys the [built code](https://github.com/katiefenn/katiefenn.github.io) to [GitHub Pages](https://pages.github.com/). The built code is never committed to the source repository.

[Dominic Denicola's article](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd) explains the entire process for setting this up.

## Future improvements
Some things that I hope to work on that can improve the site in the future:

- HTTPS support with [Let's Encrypt](https://letsencrypt.org/)
- HTTP2 support and private hosting with [Caddy](https://github.com/mholt/caddy)

## In Summary
Frontend tooling is steaming ahead at a breathtaking pace. It's easy to [become disillusioned](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.907fj8lg6) with the latest tools, and there have been times when I felt permanently left behind by the community.

As tools like React have matured, the community have started filling in the blanks to make them more flexible for use outside of single page applications. Although there is still work to be done, I found React and Gulp to be great substitute for Jekyll. The process of writing custom Gulp plugins was not as accessible as I'd hoped, and I would encourage the community to develop a stripped-down alternative API for creating plugins.

The best thing about the project was taking ownership of every aspect of the site. I loved using Ghost and Jekyll in the past, but with so much happening "under the hood" there is a reduced incentive for customisation. The recent trend for creating numerous small modules does a lot to break down the walls of what would otherwise be an opaque box.

I hope this trend continues, especially if it is matched by the community making tooling intuitive and accessible.

The complete source code for my site is [available on GitHub](https://github.com/katiefenn/website-2017-src).
