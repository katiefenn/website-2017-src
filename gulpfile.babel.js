import gulp from "gulp";
import markdown from "gulp-markdown";
import filter from 'gulp-filter';
import ReactDOM from 'react-dom/server';
import React from 'react';
import hash from 'gulp-hash';
import rename from 'gulp-rename';
import webserver from 'gulp-webserver';
import postcss from 'gulp-postcss';
import modules from 'postcss-modules';
import concat from 'gulp-concat';
import assets from 'postcss-assets';
import watch from 'gulp-watch';

import jsxTemplate from "./lib/plugins/jsx-template";
import paginate from "./lib/plugins/paginate";
require('images-require-hook')('.svg', '/dist/assets/img');
const { Page } = require("./lib/components/page");
const { Article } = require("./lib/components/article");

gulp.task('make-site', [
  'stylesheets',
  'index-pages',
  'article-pages'
]);

gulp.task('dev', ['make-site', 'server']);

gulp.task('article-pages', function() {
  return gulp.src('articles/**/*')
    .pipe(filter(file => file.path.match(/manuscript/)))
    .pipe(markdown())
    .pipe(jsxTemplate(Article))
    .pipe(jsxTemplate(Page))
    .pipe(gulp.dest('./dist'));
});

gulp.task('index-pages', function() {
  return gulp.src('articles/**/*')
    .pipe(filter(file => file.path.match(/manuscript/)))
    .pipe(markdown())
    .pipe(paginate(10, file => {
      let output = ReactDOM.renderToString(
        <Article>
          { file.contents.toString("utf8") }
        </Article>
      );

      return output;
    }))
    .pipe(jsxTemplate(Page))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
  return gulp.src('lib/components/**/*.svg')
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
  gulp.src('./')
    .pipe(webserver({
      directoryListing: true
    }));
});
