console.log(2**53 -1);

console.log(Number.MAX_SAFE_INTEGER);


console.log(34723947230974092374092374002379);
console.log(34723947230974092374092374002379n);
console.log(typeof 34723947230974092374092374002379n);



console.log(1000n + 1000n);

let num = 500;
let big = 1000n;
///cannot mix num and bigint
//console.log(num + big);

//exception
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n === 20);


console.log(24353453453453453455n + ' huge number');


//divisions
console.log(11n / 3n);

//console.log(11n / 3);  error

/*

9007199254740991
9007199254740991
3.472394723097409e+31
34723947230974092374092374002379n
bigint
2000n
true
false
false
24353453453453453455 huge number
3n

*/






