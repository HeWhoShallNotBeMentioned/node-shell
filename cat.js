const fs = require('fs');

module.exports = function(fileName, done) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) done(err.stack);
    done(data);
  });
};
