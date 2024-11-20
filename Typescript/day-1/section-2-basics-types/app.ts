// const person:{
//     name:string;
//     age:number;
// } ={
//     name:"Kuldeep",
//     age:22,
// }


const person ={
    name:"Kuldeep",
    age:22,
    hobbies:['sports','gaming'],
    data:[1,2,3]
}

console.log(person.name);


function combine(val1:number ,val2:number) {
    return val1 + val2;
}
function add() {
    return 0;
}

let copyFn = combine;
copyFn =add