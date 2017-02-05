import gulp from "gulp";
import markdown from "gulp-markdown";
import filter from 'gulp-filter';
import ReactDOM from 'react-dom/server';
import React from 'react';
import hash from 'gulp-hash';
import rename from 'gulp-rename';
import connect from 'gulp-connect';
import postcss from 'gulp-postcss';
import modules from 'postcss-modules';
import concat from 'gulp-concat';
import assets from 'postcss-assets';
import sort from 'gulp-sort';
import sequence from 'gulp-sequence';

import jsxTemplate from "./lib/plugins/jsx-template";
import paginate from "./lib/plugins/paginate";
import replace from "./lib/plugins/replace";
import stats from './lib/plugins/stats';
require('images-require-hook')(['.svg', '.png', '.ico'], '/assets/img');

const { Page } = require("./lib/components/page");
const { Article } = require("./lib/components/article");
const { PageIndex } = require("./lib/components/page-index");
const ARTICLES_PER_PAGE = 10;

let articleCount = 0;

gulp.task('dev', sequence('make-site', 'watch-site', 'server'));

gulp.task('make-site', sequence('stylesheets', 'images', 'article-stats', ['index-pages', 'articles-and-pages']));

gulp.task('watch-site', () => {
  return gulp.watch(['lib/**/*.js', 'lib/**/*.css', 'lib/**/*.svg', 'articles/**/*'] , [
    'stylesheets',
    'images',
    'index-pages',
    'articles-and-pages'
  ]);
});

gulp.task('article-stats', () => {
  return gulp.src('articles/**/*')
    .pipe(stats(stats => {
      articleCount = stats.fileCount;
    }));
});

gulp.task('articles-and-pages', function() {
  return gulp.src(['articles/**/*', 'pages/**/*'])
    .pipe(filter(file => file.path.match(/manuscript/)))
    .pipe(markdown())
    .pipe(sort({ asc: false }))
    .pipe(rename((path) => {
      path.basename = 'index';
      path.dirname = path.dirname.replace(/\d{4}\-\d{2}\-\d{2}\-/, '');
    }))
    .pipe(jsxTemplate(Article))
    .pipe(jsxTemplate(Page))
    .pipe(gulp.dest('./dist'));
});

gulp.task('index-pages', function() {
  return gulp.src('articles/**/*')
    // Select just the article entry-point ("manuscript.md")
    // to enable a collated article structure
    .pipe(filter(file => file.path.match(/manuscript/)))

    // Transform Markdown into HTML
    .pipe(markdown())

    .pipe(sort({ asc: false }))

    .pipe(rename((path) => {
      path.basename = path.dirname.replace(/\d{4}\-\d{2}\-\d{2}\-/, '');
      path.dirname = '';
    }))

    // Add permalinks to article pages
    .pipe(replace(/<h1[\w="\s\-]*>([\w\s\-]+)<\/h1>/, (file) => {
      let path = file.path.match(/articles\/([\w\-]*)/)[1];
      return `<h1><a href="${ path }">$1</a></h1>`
    }))

    .pipe(jsxTemplate(Article))

    // Aggregate articles into index pages and inject
    // into article templates (server-rendered React components)
    .pipe(paginate(10))

    // Inject article content into site templates
    // (server-rendered React components)
    .pipe(jsxTemplate(PageIndex, { pageCount: Math.ceil(articleCount / ARTICLES_PER_PAGE) }))
    .pipe(jsxTemplate(Page))

    // Send to the distributable directory for deployment
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
  return gulp.src([
    'lib/components/**/*.svg',
    'lib/components/**/*.png',
    'lib/components/**/*.ico'
  ])
    .pipe(hash({
      algorithm: 'md5',
      template: '<%= hash %><%= ext %>',
      hashLength: 33
    }))
    .pipe(rename((path) => {
      path.dirname = '';
    }))
    .pipe(gulp.dest('./dist/assets/img'))
});

gulp.task('manifest', function() {
  return gulp.src('lib/components/page/manifest.json')
    .pipe(gulp.dest('./dist/assets'))
});

gulp.task('stylesheets', () => {
  const filterModules = filter(file => file.path.match(/lib\/components/), { restore: true });

  return gulp.src(['lib/components/**/*.css', 'lib/styles/global.css'])
    .pipe(postcss([
      assets()
    ]))
    .pipe(filterModules)
    .pipe(postcss([
      modules()
    ]))
    .pipe(filterModules.restore)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('server', function() {
  connect.server({
    root: 'dist'
  });
});
