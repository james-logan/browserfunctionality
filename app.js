var http = require('http')
var input = require('./lib/input.js')
var canIUse = require('./lib/canIUse')

http.createServer(function (req, res) {
  if (req.method === 'GET') {
    input(req.headers['user-agent'], canIUse, req.url);
  }
}).listen(1337)
