module.exports = (fileName, options) => {
  if (typeof options != 'object') {
    options = {};
  }

  options = {
    ...{
      timestamp: true,
      timestampValue: Date.now()
    }, ...options
  };

  let fileNameWOExtension = fileName.substr(0, fileName.lastIndexOf('.')) || fileName;
  let fileExtension = fileName.split('.').pop();
  if (fileName == fileExtension) {
    fileExtension = '';
  }

  fileNameWOExtension = fileNameWOExtension.replace(/[^a-z0-9]+/gi, '_');

  return fileNameWOExtension + (options.timestamp ? ('_' + options.timestampValue) : '') + (fileExtension ? '.' : '') + fileExtension;
};
