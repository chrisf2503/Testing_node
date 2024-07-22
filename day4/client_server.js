//Here we will learn about how to build a client and server with ninja

//protocal: a set of communication rules that two side agree to use when communicating

//ports: a program running on a computer can listne for requests sent to a particular
//port number 

//calling the http module
var http = require('http');

//creating a server which has a function that passes two param, a request object and a 
//response object 
var server = http.createServer(function(req,res){
    //We will print out the type of request we made base on the url
    console.log('request was made: ' + req.url);
    //
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello world');
});
server.listen(3000,'127.0.0.1');

console.log('We are listening to port 3000');