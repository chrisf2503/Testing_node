var http = require('http');
var fs = require('fs');
// var read_stream = fs.createReadStream(__dirname + '/readme.txt');
// var write_stream = fs.createWriteStream(__dirname+'/writeMe.txt');

// //this will work the same way as the method we implemented before (line: 8-11)
// read_stream.pipe(write_stream)

// read_stream.on('data', function(chunk){
//     console.log('new chunk recieved');
//     write_stream.write(chunk);
// });

//Now what we can do is we can implement these read and write stream when using
//the server like this
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    //We will read the textfile readme.txt
    var read = fs.createReadStream(__dirname + '/readme.txt','utf8');
    //The res is a response object which is a writeable stream
    read.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('We are listening to port 3000');
