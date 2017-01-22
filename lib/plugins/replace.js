var through = require('through2');

export default function replace(search, callback) {
  return through.obj(function(file, encoding, cb) {
    if (file.isStream()) {
      let error = new gutil.PluginError('myPlugin', 'Streaming not supported');
      return callback(error);
    }

    if (file.isDirectory()) {
      return callback(null, file);
    }

    const replacement = callback(file);

    let contents = file.contents.toString("utf8");
    let output = contents.replace(search, replacement);

    file.contents = new Buffer(output);

    cb(null, file);
  });
};
