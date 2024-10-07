'use strict';


function calcAge(birthyear){
    const age = 2037 - birthyear;

    function printAge(){
        const output = `You are ${age}, born in ${birthyear}`;
        console.log(output);
        

        if(birthyear >= 1980 && birthyear <=2005){
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            const output ="NEW OUTPUT";
            
        }

        //var is not block scoped , rather it is function or global scoped
        console.log(millenial);
        
        
    }

    printAge();
    // console.log(output);    cannot access outside of scope
    console.log(age);
    
}

const firstName = "John";

calcAge(1991);

// printAge();  cannot access


