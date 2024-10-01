/*
Currying is a functional programming technique where a function 
with multiple arguments is transformed into a series of functions, 
each taking a single argument.

*/

//using bind

function multiply(x,y){
    console.log(x*y);
}

const multiplyByTwo = multiply.bind(this,2);
const multiplyByThree = multiply.bind(this,3);

multiplyByTwo(5);
multiplyByThree(5);



//Using closures

function add(x){
    return function(y){
        console.log(x+y);
    }
}

const incrementByOne = add(1);
const incrementByTen = add(10);


incrementByOne(11);


incrementByTen(11);

