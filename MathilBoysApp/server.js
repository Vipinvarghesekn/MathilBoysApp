'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    }   
    );
    var myReadStream = fs.createReadStream('htmlpage.html', 'utf8');
    myReadStream.pipe(res);


}).listen(port);
