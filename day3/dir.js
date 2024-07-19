var fs = require('fs');

//this will delete the file, but only works if the file exist, if it doesnt then an error will occure 

fs.unlinkSync('write.txt')