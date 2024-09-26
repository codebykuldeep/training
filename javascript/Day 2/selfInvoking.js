//Anonymous Functions

const fn = function(a,b){
    return a*b;
}

console.log(fn(3,4));


//self invoking functions
(function(){
    console.log('Self Invoked Functions');
     
})()
