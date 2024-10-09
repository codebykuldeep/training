const map = new Map();
map.set('name','John');
map.set(1,"Pizza");

//also return map when set new elements
console.log(map.set(2,'India'));

console.log(map.size);

//can chain multiple methods of map
map.set(2,'India').set(3,'italy').set(4,'venice');


console.log(map.get(3));


console.log(map.has(2));

//delete key
map.delete(4);

console.log(map);

//map.clear();

//converts object to map
const obj ={
    name:'john',
    age:30,
    last:'doe',
    country:'india'
}

const newmap= new Map(Object.entries(obj))
console.log(newmap);


//iterate over map
for (const [key,value] of newmap) {
    console.log(key , value);
    
}

//maps to arrays

console.log([...newmap.keys()]);
console.log([...newmap.values()]);







