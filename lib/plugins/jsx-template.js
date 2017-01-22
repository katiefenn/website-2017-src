var through = require('through2');    // npm install --save through2
var ReactDOM = require('react-dom/server');
var React = require('react');

export default function jsxTemplate(Component, props) {
  return through.obj(function(file, encoding, callback) {
    if (file.isStream()) {
      let error = new gutil.PluginError('myPlugin', 'Streaming not supported');
      return callback(error);
    }

    if (file.isDirectory()) {
      return callback(null, file);
    }

    let contents = file.contents.toString("utf8");
    let output = ReactDOM.renderToString(
      <Component {...props}>
        { contents }
      </Component>
    );

    file.contents = new Buffer(output);

    callback(null, file);
  });
};
