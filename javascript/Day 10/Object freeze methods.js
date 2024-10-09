const person = {
    name :'John',
    lastname : 'Doe',
    age : 30,
    nationality:"India",
}
const person2 ={
    name :'James',
    lastname : 'Lee',
    age : 35,
    nationality:"India",
}


//freeze method prevent any changes properties

Object.freeze(person);

person.car='Tata';

console.log(person);

delete person.age;

console.log(person);

//but we cannot also change value of existing properties

person.name = 'Max';

console.log(person);


//to check whether object is frozen or not

console.log('Person is frozen - ',Object.isFrozen(person));

console.log('Person2 is frozen - ',Object.isFrozen(person2));


/*
OUTPUT


{ name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
{ name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
{ name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
Person is frozen -  true
Person2 is frozen -  false

*/
