

//slice

let arr = ['a','b','c','d','e','f'];

// console.log(arr.slice(2));

// console.log(arr.slice(2,5));

// console.log(arr.slice(-1));

// console.log(arr.slice(-3,-1));


//splice
console.log('SLPICE');

//remove first 2 elemts
//console.log(arr.splice(2));

//at 0 , remove 3 els
//console.log(arr.splice(0,3));

//after 2 el after 4
console.log(arr);

console.log(arr.splice(0,0,'x','y'));


//reverse
      //mutuate original array
arr = ['a','b','c','d','e','f'];

arr.reverse();

console.log(arr);

arr.reverse();

//concat
const arr2 = [1,2,3]
const newArr = arr.concat(arr2)

console.log(newArr);



//at

console.log(arr.at(4));


console.log(arr.at(-4));



//for and foreach
for(let [i,val] of arr.entries()){
  console.log(i,val);
  
}

newArr.forEach((val,i,arr)=>{
    console.log(i+"->"+val);
    
})



const currency= new Map([
  ['USD',"AMERICAN DOLLAR"],
  ['EUR','EURO'],
  ['GBP',"POUND"]
]);

currency.forEach((val,key,map)=>{
console.log(key +" -> " + val);

})

const currencySet =new Set(['USD','EUR','EUR','GBP'])

currencySet.forEach((val,key,set)=>{
  console.log(key +" -> " + val);
})



//map
const moneyInUSD = [4,5,33,91,12];

const EurobyUsd = 1.1;
let moneyInEURO =moneyInUSD.map((val)=> val*EurobyUsd)

console.log(moneyInEURO);


moneyInEURO =moneyInUSD.filter((val)=>{
  return val*EurobyUsd
} )

console.log(moneyInEURO);

movements= [23435,3545,-423423,-232,4343,2111];


const deposits = movements.filter((val)=> val>=0);
const withdrawal = movements.filter((val)=> val<0);

console.log(deposits,withdrawal);


//find max using reduce
let max = movements.reduce((prev,curr)=>{
  if(curr>=prev){
    return curr;
  }
  else
  return prev;
},movements[0]);

console.log('maximum -> ',max);


//find -> find first value which satisfy this condition
console.log(movements.find(mov => mov < 0));



//includes
let list =[2,3,5,6,8,9];
console.log(list.includes(8));


//some
console.log(list.some((i)=>i>7));


//every
console.log(list.every((i)=>i>0));






