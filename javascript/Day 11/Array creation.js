let arr1 = [1,2,3,5,6,7]

const array = new Array(arr1);


//if we pass single value , it will create array of that size
const arr =new Array(10);


const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);


//it will fill 23 at index 2 and 6
arr.fill(23, 2, 6);
console.log(arr);

// Array.from and call back passed their is like a map method which fill the value in array
const y = Array.from({ length: 7 }, () => 1);
console.log(y);


// _ signify that their is not use of that parameter 
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//array.from is also used to created array from iterables


/*

[ <7 empty items> ]
[
  1, 1, 1, 1,
  1, 1, 1
]
[ <2 empty items>, 23, 23, 23, 23, <4 empty items> ]
[
  1, 1, 1, 1,
  1, 1, 1
]
[
  1, 2, 3, 4,
  5, 6, 7
]


*/
