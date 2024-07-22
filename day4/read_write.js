//Buffers:

//Temporary storage spot for a chunk of data that is being transferred 
//from one place to another

//the buffer is filled with data, then passed along

//Transder small chunks of data at a time

//Streams:

//Wrtiable streams: allow node js to write data to a stream

//readable stream: allow node js to read daat from a stream

//duplex can read/write to a stream

//var http = request('http');
var fs = require('fs');

//read data from the current directory/readMe file 
var read_stream = fs.createReadStream(__dirname + '/readme.txt');
//this will allow us to write data within the directory/file we want it to be stored
var write_stream = fs.createWriteStream(__dirname+'/writeMe.txt');

//this will use the on module that will take in data event an 
//a function which will read the file all at once

read_stream.on('data', function(chunk){
    console.log('new chunk recieved');
    //console.log(chunk);
    write_stream.write(chunk);
});


// var server = http.createServer(function(req,res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('hello world');
// });
// server.listen(3000,'127.0.0.1');
// console.log('We are listening to port 3000');

//So the different between lets say .writeFile and .write is that 
//We are basically in a sense split chunks of data within the .write therefore 
//get data more quickly within the write rather then the .writeFile
//So the stream deals with data .