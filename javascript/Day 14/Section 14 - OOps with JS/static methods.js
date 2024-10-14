class Person{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    //instance method
    calcAge(){
        console.log(2024- this.year);
    }

    //static method
    static hello(){
        console.log('Hello , Im a static method');
    }
};

Person.hey =function (){
    console.log('Hello there');
    
}

Person.hey();


Person.hello();