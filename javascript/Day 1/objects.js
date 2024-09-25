const obj={
    name:"kuldeep",
    last: "kumar",
    age:22,
    eye:'Black',
}

//OBJECTS METHODS


//Object.entries   converts obj to key:val array
let objarr= Object.entries(obj)
console.log(objarr);


//object.FromEntries
let obj2 = Object.fromEntries(objarr);
console.log(obj2);

//Object.values  -> converts obj values to array
let values = Object.values(obj)
console.log(values);


//Objest.keys -> converts obj keys to array
let keys = Object.keys(obj);
console.log(keys);


/* OUTPUT 

[
  [ 'name', 'kuldeep' ],
  [ 'last', 'kumar' ],  
  [ 'age', 22 ],        
  [ 'eye', 'Black' ]    
]
{ name: 'kuldeep', last: 'kumar', age: 22, eye: 'Black' }
[ 'kuldeep', 'kumar', 22, 'Black' ]
[ 'name', 'last', 'age', 'eye' ]


*/