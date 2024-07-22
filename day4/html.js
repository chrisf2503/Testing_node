var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    //change plain to html since we are reading html
    res.writeHead(200,{'Content-Type': 'text/html'});
    //We will read the html file index.html
    var read = fs.createReadStream(__dirname + '/index.html','utf8');
    //The res is a response object which is a writeable stream
    read.pipe(res);
});
//Now when we run 'node html' we are lunching the html website
server.listen(3000,'127.0.0.1');
console.log('We are listening to port 3000');
