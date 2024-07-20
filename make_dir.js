const fs = require('fs');

//this will allow us to  read user inputs
const readline = require("readline-sync")

//this will contain a class which will have date dir_name and file_name
const detail = function(dir_name,file_name,discrip){
    this.dir_name = dir_name;
    this.file_name = file_name + '.js';
    this.discription = '//' + discrip;
}
//create the new directory and file
function make_dir(detail){
    fs.mkdir(detail.dir_name, function(){
        fs.writeFileSync(`./${detail.dir_name}/${detail.file_name}`, detail.discription);
    })
}

const user_in = function(){
    //This will allow us to put user input on the same line
    process.stdout.write('Enter Directory Name: ');
    //this will read user input an covert it to a string
    var direc = String(readline.question());
    process.stdout.write('Enter File name: ');
    var file = String(readline.question());
    process.stdout.write('Enter brief discription: ');
    var discrip = String(readline.question());
    const make = new detail(direc,file,discrip);
    make_dir(make);
}
user_in();