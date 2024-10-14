// class expression
//const Person = class {}

//class declaration
class Person{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    //method will be added to prototype property
    calcAge(){
        console.log(2024- this.year);
    }
}

const jessica = new Person('jessica',1999);

//here calcAge func will be in __proto means prototypal inheritance not in the direct proto;
jessica.calcAge();


Person.prototype.greet =function(){
    console.log(`Hey ${this.name}`);
    
}

jessica.greet();

//1 classes are not hoisted
//2 classes are first class citizen 
//3 classs are executed in strict mode

