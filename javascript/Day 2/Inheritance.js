class Car{
    constructor(brand){
        this.name = brand;
        this.price = 1000;
    }
    // constructor(brand,price){   //JS do not support constructor overloading
    //     this.name=brand;
    //     this.price = price;
    // }
    getDetail(){
        return this.name + " " + this.price
    }
    PendingCost(x){
        return this.price - x;
    }
    Info(){
        return `I have ${this.name}. `;
    }
}

class Model extends Car{
    constructor(brand,model){
        super(brand);                       // We call the parent constructor using super(params)
        this.model = model;
    }
    KnowModel(){
        return `My car model is ${this.model}`;
    }
    fullDetail(){
        return this.Info() + this.KnowModel();
    }

    //getter
    get carname(){
        return this.name + " " + this.model;
    }

    //setter                            // getter setter can be of same name , can be called without paranthess ()
    set carname(x){
        this.name = x;
    }
}

let myCar = new Model('tata','harrier');

console.log(myCar.KnowModel());

console.log(myCar.fullDetail());

console.log(myCar.carname);

myCar.carname = 'honda';
console.log(myCar.carname);

console.log(myCar);


/*
OUTPUT



My car model is harrier
I have tata. My car model is harrier
tata harrier
honda harrier
Model { name: 'honda', price: 1000, model: 'harrier' }


*/
