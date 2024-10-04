// Null Coalescing ??

//ES2020

//NUllish : null and undefined

const object ={
    name:"John",
    age:25,
    last:"doe",

}

console.log(object.name ?? 'No name');

console.log(object.address ?? 'No Address');

object.hair ??= 'black';

console.log(object);

