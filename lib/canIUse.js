var request = require('request')
var cheerio = require('cheerio')

module.exports = function (url, browser, version) {
  request('http://www.caniuse.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      // console.log(body) // Show the HTML for the Google homepage.
    }
  })
}
