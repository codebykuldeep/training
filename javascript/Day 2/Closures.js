//closures are variabel bundled along with lexical environment

function a(){
    var i= 5;
    function b(){
        j=10;
        function c(){
            console.log(j);
            i++;
            console.log(i);
            
        }
        c();
    }
    return b;
}

let x = a();
console.log(x);

x();



/*

OUTPUT

[Function: b]
10
6

*/