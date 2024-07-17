//a list of basic operation

//We we set module.exports.function_name = the function_name then we dont need the last
// 4 lines that we initianly did before, which we can cut them out
module.exports.add = function add(num1,num2){
    return num1+num2;
}

module.exports.sub = function sub(num1,num2){
    return num1-num2;
}

module.exports.multiply = function multiply(num1,num2){
    return num1*num2
}

module.exports.divid = function divid(num1,num2){
    return num1/num2;
}
//Here we are exporting by specifying the function we want to call within module.js
//So the formate will be: module.exports.function_name = function_name
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multiply = multiply;
// module.exports.divid = divid;