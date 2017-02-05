var through = require('through2');
var ReactDOM = require('react-dom/server');
var React = require('react');
var File = require('vinyl');
var Path = require('path');

export default function paginate(itemsPerPage) {
  let items = [];
  let pageCount = 0;

  function transform(file, encoding, cb) {
    if (file.isStream()) {
      let error = new gutil.PluginError('myPlugin', 'Streaming not supported');
      return cb(error);
    }

    if (file.isDirectory()) {
      return cb(null, file);
    }

    items.push(file.contents.toString("utf8"));

    if (items.length === itemsPerPage) {
      let newFile = new File();
      let page = items.join('');
      let name = pageCount !== 0 ? pageCount + '.html' : 'index.html';

      newFile.contents = new Buffer(page);
      newFile.path = name;
      this.push(newFile);

      items = [];
      pageCount++;
    }

    cb();
  };

  function flush(cb) {
    if (items.length) {
      let newFile = new File();
      let page = items.join('');
      let name = pageCount !== 0 ? pageCount + '.html' : 'index.html';

      newFile.contents = new Buffer(page);
      newFile.path = Path.join(name);
      this.push(newFile);
    }

    cb();
  };

  return through.obj(transform, flush);
};
