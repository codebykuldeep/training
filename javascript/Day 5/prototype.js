console.log(Array.prototype);

const arr =[1,2,3];

console.log(arr.__proto__);


Array.prototype.visit= function(x){
    return this[x];
};

console.log(arr.visit(2));


/*
Prototypal Inheritance
It means array prototype is  basically implented using object prototype
that's why in JS , every thing is implemeted through objects and somewhat are objects.

*/