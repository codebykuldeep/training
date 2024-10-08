const arr = [[1,2,3],4,[5,6,7]];

console.log(arr.flat());

const arr2 = [[1,[2,3]],4,[5,[6,7,8],9]];

//by default flat only goes one level deep
console.log(arr2.flat());
/*[ 1, [ 2, 3 ], 4, 5, [ 6, 7, 8 ], 9 ] */


//by pass ing arguements you can go for deep level
console.log(arr2.flat(2));
/*[1, 2, 3, 4, 5,6, 7, 8, 9] */

