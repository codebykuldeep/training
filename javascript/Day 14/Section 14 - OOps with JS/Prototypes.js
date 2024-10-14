'use strict';


const Person = function(firstname,birthYear){
    //instance properties
    this.firstname = firstname;
    this.birthYear  = birthYear;
}

const jonas = new Person('jonas',2000);

console.log(jonas.__proto__);

//top of prototype chain - object prototype
console.log(jonas.__proto__.__proto__);

console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);


const arr = [1,2,3,4,5,6,1,2,3,4,5,5,6];
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

/*

test.js:12 {}
test.js:15 {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
test.js:17 null
test.js:19 ƒ (firstname,birthYear){
    //instance properties
    this.firstname = firstname;
    this.birthYear  = birthYear;
}
test.js:23 [unique: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
test.js:25 true
test.js:31 (6) [1, 2, 3, 4, 5, 6]
VM54 test.js:1 undefined
*/
