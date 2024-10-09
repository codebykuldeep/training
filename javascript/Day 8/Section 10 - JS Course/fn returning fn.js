function greet(greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
        
    }
}


const greeting = greet('hey')

greeting('john');

greeting('Doe');

greet('Hello')('Jonas');

//in arrow function

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);


greetArrow('Hey')('David')




/*

hey john
hey Doe
Hello Jonas
Hey David
*/