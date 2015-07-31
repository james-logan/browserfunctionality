var http = require('http');

module.exports = function (useragent, cb, url) {
  console.log(('http://www.useragentstring.com/?uas=' + useragent + '&getJSON=all').split(" ").join(""))
  http
    .get('http://www.useragentstring.com/?uas=' + useragent + '&getJSON=all')
    .on('error', function (error) {
      console.log('ERRRRRRROR', error)
    })
    .on('response' , function (res) {
      // console.log(res)
      var body;
      res.on('data', function (data) {
        body += data.toString('utf8');
      })

      res.on('end', function () {
        body = JSON.parse(body.slice(9))
        console.log(body.agent_name, body.agent_version)
      })
      //console.log(data.agent_name, data.agent_version)
      // cb(url.slice(1), res.agent_name, res.agent_version)
  })
}
