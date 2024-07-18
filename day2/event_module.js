//node js has a bunch of call module an one is called events module, we can call this 
//as if we were calling some file but just name events

var events = require('events')

// This will create an object of myEmitter
var myEmitter = new events.EventEmitter();

//now we can do the following:

//When the event 'someEvent' is emitted then it will fire the function which is going
//to print out the message
myEmitter.on('someEvent',function(mssg){
    console.log(mssg);
});
//this is just manually emitting the function
myEmitter.emit('someEvent', 'the event was emitted');

//This will call in the utility module that is built within node js

var util = require('util');

//This is a Person object which will take in a name and set the name when its going to 
//be constructed

var Person = function(name){
    this.name = name;
}

//this inherits both the Person Object an the Event Emitter
util.inherits(Person,events.EventEmitter);
//we just created people

var p1 = new Person('Chris');
var p2 = new Person('David');
var p3 = new Person('Kuya');

//Now we will just put this within an array

var arr = [p1,p2,p3];

//This is how you would call a for each loop, but will take in a function of Person
//which will then do the following
arr.forEach(function(people){
    people.on('speak',function(mssg){
        console.log(people.name + ' said: ' + mssg);
    })
})

p1.emit('speak',"hello guys!");
p2.emit('speak',"Are we going to play today?");