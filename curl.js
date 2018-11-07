const request = require('request');

module.exports = function(site, done) {
  request(site, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      console.log('statusCode:', response && response.statusCode);
      done(body);
    }
  });
};
