const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    order:function(x,y){
        return [this.starterMenu[x],this.mainMenu[y]];
    }
};


const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);


//rename the property name to another name while destructuring
const {
    name:restaurantName,
    openingHours:hours,
    categories: tags
} = restaurant;

console.log(restaurantName,hours,tags);

//default value
const {menu =[], starterMenu :starters =[]} = restaurant;

console.log(menu,starters);

//mutating variables
let a = 111;
let b =999;

const obj = {a:2,b:3,c:4};

({a,b} = obj);

console.log(a,b);

//nested destructuring

const {fri :{open:ab,close:ba}} = restaurant.openingHours;

console.log(ab,ba);





//Parameter destructuring
const person ={
    name:'john',
    last:'doe',
    age:30,
    area:'india',
}

function print({name ,last , street = 11}){
    console.log(`Full name is ${name + " " + last} and street no is ${street}`);
    
}

print(person);



