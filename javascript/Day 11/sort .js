const names = ['Jonas', 'Zach', 'Adam', 'James'];
console.log(names.sort());
console.log(names);


const numbers =[324,23,2,30,3,9]

// Numbers
console.log(numbers);

//It converts them string internally then sort thats why it giving wrong sorting for number
//that why we require a compare function

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);


/**
 
[ 'Adam', 'James', 'Jonas', 'Zach' ]
[ 'Adam', 'James', 'Jonas', 'Zach' ]
[ 324, 23, 2, 30, 3, 9 ]
[ 2, 3, 9, 23, 30, 324 ]
[ 324, 30, 23, 9, 3, 2 ]

 */


