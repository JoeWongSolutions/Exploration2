var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The current date is: ' + dt.myDateTime() + '<br>');
    res.write(req.url + '<br>');
    var q = url.parse(req.url, true).query;
    res.write(q.month + ' ' + q.year + '<br>');
    res.end('Hello World!');
}).listen(8000);
