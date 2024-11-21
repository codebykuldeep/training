console.log('Your code goes here...');


function add(n1:number,n2:number,showResult:boolean){
    if(showResult){
        return n1+n2;
    }else{
        return 'RESULT NOT ALLOWED'
    }
}

const num1 = 5;
const num2 = 10;
const printResult =false;

//type inference
let str ='hi';  //typescript automatically set str to string type
/*str = 5  this will give error as we assign number to string variable */

const res = add(num1,num2,printResult);
console.log(res);
