let date = new Date();

//date objects are static

console.log(date);


//there are 7 ways to create a date object

let date2 = new Date(2002,3,22,2,0,0);

console.log(date2);



// toDateString method convert date in more readable form

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toUTCString());

/*
OUTPUT

2024-10-08T10:00:38.848Z
2002-04-21T20:30:00.000Z
Tue Oct 08 2024
2024-10-08T10:00:38.848Z
Tue, 08 Oct 2024 10:00:38 GMT

*/


//parse date to millisecond
let msec = Date.parse('April 22,2002');
console.log(msec);

console.log(new Date(msec));



//convert millisecond to date 

let millisecd = Date.now();
console.log(new Date(millisecd));




//Date get methods
console.log('DATE GET METHOD');

let d = new Date();
console.log(d);

console.log(d.getFullYear());

console.log(d.getMonth());

console.log(d.getDay());

console.log(d.getMinutes());

console.log(d.getSeconds());

console.log(d.getTime());








