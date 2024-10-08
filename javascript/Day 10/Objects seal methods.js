const person = {
    name :'John',
    lastname : 'Doe',
    age : 30,
    nationality:"India",
}


//seal method prevent from adding and removing properties

Object.seal(person);

person.car='Tata';

console.log(person);

delete person.age;

console.log(person);

//but we ca change value of existing properties

person.name = 'Max';

console.log(person);


//to check whether object is sealed or not

console.log(Object.isSealed(person));

/*
OUTPUT


{ name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
{ name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
{ name: 'Max', lastname: 'Doe', age: 30, nationality: 'India' }
true

*/
