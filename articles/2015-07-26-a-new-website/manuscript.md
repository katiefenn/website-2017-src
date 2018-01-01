## A New website
*26th July 2015*

Since last year, I have been taking a keen interest in [Ghost](https://ghost.org/), the new blogging platform built on Node.JS. I've been fortunate to contribute to the project, and I'm planning on continuing to donate some of my time and experience.

Migrating my website to Ghost is a great way of getting to know it a bit better, as well as providing an opportunity to write extensions and supporting tools.

At the same time, an audit of my old website showed it was significantly behind-the-times. An early attempt at building a high-dpi design did not go as well as planned. Here are the figures:

__Total requests:__ 18
__Total requests size:__ 1.6MB
__Time to load (fiber):__ 582ms

_Ouch._ Not good.

Since then, I've learned how great [SVGs](https://css-tricks.com/using-svg/) are to work with, so I decided a ground-up redesign with Adobe Illustrator was necessary.

### SVGs
Smaller filesizes and great looking images on high-dpi displays make SVGs a good choice for developers.

More than this, I found Adobe Illustrator a surprisingly good tool for creating graphics for the web. Vector graphics packages are good at creating the clean lines and bold shapes that are common on the web. Being able to adjust vector shapes is really useful when tweaking and optimising designs, which is an important part of designing great web sites.

### Data URI Images
Embedding images into stylesheets reduces the number of HTTP requests, meaning faster loading sites. The smaller size of SVG images means embedding them inside stylesheets places a smaller burden on their overall filesize.

I've also chosen to make the main heading an SVG image instead of adding an extra request to a web font for just a single element.

### Responsive Web Design
I've paid extra-special attention to how the design responds to mobile devices. On medium devices, the decoration becomes static to make better use of the space. On mobiles, the decorative elements are hidden and the content and typography takes precedence.

I've been using [Instapaper](https://www.instapaper.com/) to save articles for later reading, and love the focused reading experience it gives. It was this experience I wanted to give all readers of my site on mobiles.

### Ghost
Ghost makes a change from my previous platform of choice. I liked the simplicity of [Jekyll](http://jekyllrb.com/), particularly its support for generating pages from [Markdown](http://daringfireball.net/projects/markdown/) source files.

My choice of Ghost is primarily made to support my contributions to the platform, but its support for Markdown authoring leaves the door open for importing content from files or services in the future.

### Platform
Even after all of this, a significant effort has been made to completely re-platform my site.

I decided to use [Ansible](http://www.ansible.com/home) to provision a [Digital Ocean](https://www.digitalocean.com/) droplet. Using automated provisioning gives a useful interface for making incremental changes to your setup, which is especially useful when you have a lot to learn about devops like I have.

I'm using the combination of [CentOS](https://www.centos.org/) and [nginx](http://nginx.org/) for the base OS and web server. I've been working with both for four years, and both have proven to be dependable and easy to work with for those with limited time to spend.

### Performance
Here's what impact the improvements have made to the performance:

__Total requests:__ 8
__Total requests size:__ 109KB
__Time to load (fiber):__ 445ms

### Summary
I'm pleased with the improvement in performance, and happy to finally put the site to work. The re-platforming took longer than expected but paid off with a set of Ansible playbooks I can re-use and build on. Deciding when a project is _done_ is always a problem, and __this site is not done__. But it is _ready_, and I am pleased to show not only a website that looks good but also works well.
