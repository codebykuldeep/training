function add(x,y){
    return x+y;
}

let ans1 = add(5,3);


//let ans2 = subtract(5,3); cannot do this because function expression are not hoisted .

const subtract = function (x,y){  ///function expression
    return x-y;
}


let ans2 = subtract(5,3);

console.log(ans1 , ans2);
