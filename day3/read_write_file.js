//This fs will allow us to read and write a file
var fs = require('fs');
//this will take in the file name and the character encoded
var read = fs.readFileSync('read.txt', 'utf8');

console.log(read);

//then to write inside a file we would take in the file name and the message 
const str = "this is some text I want to write"

fs.writeFileSync('write.txt',str);
//now this becomes async meaning that line 17 will print out first then line 14 would execute
fs.readFile('read.txt', 'utf8', function(err,data){
    console.log(data);
})

console.log("just want toprint this out ");
