var through = require('through2');

export default function stats(callback) {
  let fileCount = 0;

  function transform(file, encoding, cb) {
    if (file.isStream()) {
      let error = new gutil.PluginError('myPlugin', 'Streaming not supported');
      return cb(error);
    }

    if (file.isDirectory()) {
      return cb(null, file);
    }

    fileCount++;

    cb();
  };

  function flush(cb) {
    callback({
      fileCount: fileCount
    });

    cb();
  };

  return through.obj(transform, flush);
};
