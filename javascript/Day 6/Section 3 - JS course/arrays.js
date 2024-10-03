const arr =[ 1 ,2 , 3 ,4 ,5];


const list = new Array(6,7,8,9,10,'array','abc');

console.log(arr);

console.log(list);


//methods
//push

list.push('new');
let pushed = list.push('new2')  //return new array size
console.log(list ,pushed);

//unshift -> add new elements in beginning

arr.unshift('new'); // also return new size
console.log(arr);

//pop

let popped =list.pop();

console.log(popped);


//shifts   -> remove first elements and returns it
let first =arr.shift();
console.log(arr , first);


//indexOf  -> return idex of element

console.log(arr.indexOf(3));
console.log(arr.indexOf('new'));  // return -1 if not exists


//includes  -> check for element and return true or false

console.log(arr.includes('8'));

console.log(arr.includes('4'));








