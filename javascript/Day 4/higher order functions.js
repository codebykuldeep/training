const radius = [3 ,5 ,7, 4];

const calculateArea = function (radius) {
    let output=[];

    for(let x in radius){
        output.push(Math.PI *radius[x] *radius[x]);
    }
    return output;
}

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    let output=[];

    for(let x in radius){
        output.push(2*Math.PI *radius[x]);
    }
    return output;
}

console.log(calculateCircumference(radius));


const calculateDiameter = function (radius) {
    let output=[];

    for(let x in radius){
        output.push(2*radius[x]);
    }
    return output;
}

console.log(calculateDiameter(radius));



//this above all can written in easy way using higher order function
//Higher order function are those function which takes functions as arguement or return functions


function area(radius){
    return Math.PI *radius *radius;
}

function circumference(radius){
    return 2*Math.PI *radius;
}
function diameter(radius){
    return 2*radius;
}


function calculate(radius,logic){
    let output=[];

    for(let x in radius){
        output.push(logic(radius[x]));
    }
    return output;
}

console.log(calculate(radius,area));

console.log(calculate(radius,circumference));


console.log(calculate(radius,diameter));



/*
OUTPUT



[
  28.274333882308138,
  78.53981633974483, 
  153.93804002589985,
  50.26548245743669  
]
[
  18.84955592153876,
  31.41592653589793,
  43.982297150257104,
  25.132741228718345
]
[ 6, 10, 14, 8 ]
[
  28.274333882308138,
  78.53981633974483,
  153.93804002589985,
  50.26548245743669
]
[
  18.84955592153876,
  31.41592653589793,
  43.982297150257104,
  25.132741228718345
]
[ 6, 10, 14, 8 ]




*/
