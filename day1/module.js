//Now here sometimes we want to get access to some function that are built within another
//file therefore we can do the following 

//require will allow us to call function within different file
// './' means we trying to use the current directory and the name the file we want to get

var op = require("./operator");

//within our operator file we need to have a module.export since there are some function
//we want to gain access too and there are some that we dont

//lets test the following:

console.log(op.add(10,2));
console.log(op.sub(10,2));
console.log(op.multiply(10,2));
console.log(op.divid(10,2));