const obj ={
    name:'john',
    lastname:'doe',
    age:25,
    friends :['mary','sam','jonas'],
}

console.log(obj.name);

console.log(obj['name']);

console.log(obj.name + " " + obj['lastname']);

let key ='name';
console.log(obj[key]);
console.log(obj['last'+key]);

obj.location ='India';

console.log(obj.location);

console.log(obj);


//access array after accessing obj propery

console.log(obj['friends'][2]);






