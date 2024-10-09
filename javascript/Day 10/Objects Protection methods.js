const person = {
    name :'John',
    lastname : 'Doe',
    age : 30,
    nationality:"India",
}


//Always declare objects with const as they prevent the re-assignment


//this method prevent from adding new properties   and this is not reversible means this method can be removed or undone 
Object.preventExtensions(person);

person.car ='Tata';

console.log(person);

//But we can delete properties from object

delete person.age;

console.log(person);


// to check whether object is extensible or not means we can add properties

console.log(Object.isExtensible(person));
//true -> means you can add
//false -> you cannot add

//we can change property values

person.name = 'Derek';

console.log(person);







//This methods can be used for array also

const arr =[1,2,3,4,5];
Object.preventExtensions(arr);

//it will throw an error
// arr.push(6);

console.log(arr);




/*OUTPUT

 name: 'John', lastname: 'Doe', age: 30, nationality: 'India' }
{ name: 'John', lastname: 'Doe', nationality: 'India' }
false
{ name: 'Derek', lastname: 'Doe', nationality: 'India' }
[ 1, 2, 3, 4, 5 ]

*/









