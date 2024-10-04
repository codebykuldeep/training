/*
OPERATORs

&&
||

*/
//Reutrn first truthy values

console.log(3 || 'Kuldeep');

console.log("" || 'Kuldeep');

console.log(true || 0);

console.log(undefined || null);

console.log(undefined || null || "" || 'Kuldeep' || "JS");

const obj ={
    name:'john',
    age:23
}

const op1 = obj.last || 'No last name';
console.log(op1);


/*
3
Kuldeep
true
null
Kuldeep
No last name
*/

// && returns first falsy value on false otherwise on true , last value

console.log(`------- && -------------`);
console.log(0 && 'Jonas');

console.log(1 && 'Jonas' );

console.log(1 && 'Jonas' && 0 && 'Doe' );

console.log(1 && 'Jonas' && 7 && 'Doe' );




