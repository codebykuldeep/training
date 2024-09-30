//values and variables

let country = 'india';
let contient = 'asia';
let population = 8;

console.log(country , contient, population);


// basic operators
const description = country + ' is in ' + contient +" , and its population is "+ population + 'million peoples';

console.log(description);

// template strings

console.log(`${country}  is in ${contient} and its population is ${population} million peoples`);


//conditional statements
if(population<33){
    console.log(`${country}'s population   is ${33-population}  million below average`);
}
else{
    console.log(`${country}'s population   is ${population-33}  million above average`);
}


//type coercion
console.log('9' - '5'); // -> 4 num
console.log('19' - '13' + '17'); // -> 617 string
console.log('19' - '13' + 17); // -> 23 num
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 num


//equality operators  == vs ===

let numNeighbours = Number(prompt('How many neighbours countries does your country have ?'));

if(numNeighbours === 1){
    console.log('only 1 border');
}
else if(numNeighbours === 0){
    console.log('No borders');
}
else{
    console.log('More than One borders');
    
}


// switch case
switch(numNeighbours){
    case 1:
        console.log('only 1 border');
        break;
    case 0:
        console.log('No borders');
        break;
    default:
        console.log('More than One borders');
}

//ternery operator
console.log(`${country} population is ${population > 33 ? 'above' :'below'} average`);
