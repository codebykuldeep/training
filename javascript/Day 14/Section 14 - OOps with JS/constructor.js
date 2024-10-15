'use strict';


const Person = function(firstname,birthYear){
    //instance properties
    this.firstname = firstname;
    this.birthYear  = birthYear;

    //never to this
    // this.calcAge = function(){
    //     return 2024 - this.birthYear;
    // }
}

const p1 = new Person('jonas',2000);
//1 New {} is created
//2 func is called, this ={}
//3 {} linked to prototype
//4 function automatically return {}
console.log(p1);

const p2 = new Person('Zack',2001)

console.log(p2);




//prototypes

Person.prototype.calcAge = function(){
    return 2024 - this.birthYear;
}

console.log(Person.prototype);


console.log(p2.calcAge());

console.log(p1.__proto__);

//Person.prototype is not prototype of the person class , it is pprotype of objects created using Person

Person.prototype.species= "Homo sapiens";

console.log(p1.species,p2.species);

console.log(p1.hasOwnProperty('firstname'));
console.log(p1.hasOwnProperty('species'));

/*
Person { firstname: 'jonas', birthYear: 2000 }        
Person { firstname: 'Zack', birthYear: 2001 }
{ calcAge: [Function (anonymous)] }
23
{ calcAge: [Function (anonymous)] }
ers\kuldeep.pal\Desktop\celestial\javascript\Day 14\Section 14 - OOps with JS\constructor.js"
Person { firstname: 'jonas', birthYear: 2000 }        
Person { firstname: 'Zack', birthYear: 2001 }
{ calcAge: [Function (anonymous)] }
23
{ calcAge: [Function (anonymous)] }
Homo sapiens Homo sapiens
'Zack', birthYear: 2001 }
{ calcAge: [Function (anonymous)] }
23
{ calcAge: [Function (anonymous)] }
Homo sapiens Homo sapiens
true
false

*/