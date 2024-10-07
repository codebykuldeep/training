'use strict';
// console.log(me);


// console.log(job);  error: Uncaught ReferenceError: Cannot access 'job' before initialization




// console.log(year);

var me ='kuldeep';
let job ='Developer';
const year =2024;

console.log(addDec(2,3));

//console.log(addExpr(2,3)); error


console.log(addArrow);



function addDec(a,b){
    return a+b;
}
const addExpr = function(a,b){
    return a+b;
}
var addArrow = (a,b) => a+b; // this is treated as a variable


const checkThis = function (){
    console.log('Fn exp');
    
    console.log(this);
}

const checkThisArrow = () =>{
    console.log('Fn Arrow');
    
    console.log(this);
}

checkThis();
checkThisArrow();


var name = 'doe'
const obj ={
    name : 'john',
    year: 2000,
    calcAge : function (){
        console.log(this);
        console.log(2024 - this.year);
        const self = this;
        const isAdult =function(){
            //console.log(this);  //cannot access thsi here bcz of strict mode
            //console.log((2024 - this.year) >= 18 ? "Adult" : "Child");


            console.log(self);  
            console.log((2024 - self.year) >= 18 ? "Adult" : "Child");

        }
        isAdult();
        
    },

    greet : ()=>{
        console.log(this); //catches the global reference
        console.log(`Hello ${this.name}`);   // hello Doe 
    }
}

obj.calcAge();
obj.greet();
