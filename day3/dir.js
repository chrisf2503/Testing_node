var fs = require('fs');

//this will delete the file, but only works if the file exist, if it doesnt then an error will occure 

//fs.unlinkSync('write.txt');

//this will make a new directory that is called text_file
//fs.mkdirSync("text_file");

//this will just remove the directory
//fs.rmdirSync('text_file');\

//now lets make a new directory async
fs.mkdir('stuff', function(){
    fs.readFile('read.txt','utf8', function(err, data){
        fs.writeFileSync('./stuff/write.txt',data);
    })
})

//now if we wanted to remove a file in a directory we are not in we can do the following
//fs.unlinkSync('./stuff/write.txt');

//finally if we want to remove the file and the directory both at the same time then we can do the following
// fs.unlink('./stuff/write.txt', function(){
//     fs.rmdirSync('stuff');
// })