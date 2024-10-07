//js uses callback all the time


const add = function(a,b){
    return a+b;
}

const multiply = function(a,b){
    return a*b;
}

const calculate = function(x,y, fn1,fn2){
    console.log(fn1.name);
    console.log(fn2.name);


    console.log('add ->',fn1(x,y));

    console.log('multiply->',fn2(x,y));
    
}

calculate(2,3,add,multiply);


/*
add
multiply
add -> 5
multiply-> 6


*/