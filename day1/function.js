//Here we will just make some functions

//here we will just have a basic function which is known as a function declaration

//This functino will take in no parameter
function print_out(){
    console.log("we are using the print_out function")
}
//this function will take in 1 parameter which is a string
function print_out(name){
    console.log(`hello my name is ${name}`)
}

print_out();
print_out('chris');

//But we also have something that is known as function expression

//Function expression: functions as values assigned to variables or properties. 
//They can be anonymous or named.

//here we have a variable called multi which is equal to a function that will take 
//in 2 variables. Here we just want to multiply a and b (let them be ints)
const multi = function(a,b){
    return a*b;
};
//print should be 30
console.log(multi(10,3));

//here will create a variable called div which will have function called divid
//Which will have 2 parameters 
const div = function divid(num1,num2){
    return num1/num2;
}
//print should be 5
console.log(div(10,2));

//We should also have a Arrow function
//Arrow function:

//We have a variable called add which is equal to a arrow function will will take in 
//3 param which will just compute the sum

const sum = (a, b, c) => a + b + c;

console.log(sum(3, 4, 17)); // Output: 24

