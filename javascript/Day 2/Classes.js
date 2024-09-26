//classes are not hoisted

class Car{
    constructor(name,price){
        this.name=name;
        this.price = price;
    }
    getDetail(){
        return this.name + " " + this.price
    }
    PendingCost(x){
        return this.price - x;
    }
}


let newCar = new Car('tata',500);

console.log(newCar);

console.log(newCar.getDetail());


console.log(newCar.PendingCost(200));

