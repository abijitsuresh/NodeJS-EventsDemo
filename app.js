var events = require('events');

// var myEmmiter = new events.EventEmitter();

// myEmmiter.on('someEvent', function(message){
//     console.log(message);
// });

// myEmmiter.emit('someEvent', 'The event was emitted!');

var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var abijit = new person('Abijit');
var amit = new person('Amit');
var prasha = new person('Prasha');
var people = [abijit, amit, prasha];

people.forEach(function(person){
    person.on('speak', function(message){
        console.log(person.name + ' said: ' + message);
    });
});

abijit.emit('speak', 'hey guys');
amit.emit('speak', 'Hi hi');
prasha.emit('speak', 'Hello boys');