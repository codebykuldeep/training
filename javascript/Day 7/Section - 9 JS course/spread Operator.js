// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};


//copy array

const arr = [...restaurant.categories]
console.log(arr);


//join array

const joinArray  = [...restaurant.starterMenu,...restaurant.mainMenu]

console.log(joinArray);

//work on all iterables like string ,set ,maps , arrays

const  str = 'Array';
const letters = [...str , " " , "E"];

console.log(letters);

// for functions
function add(a,b,c){
    console.log(a+b+c);
     
}

const num = [1,2,3];

add(...num);

//After es18 also work on object;
const newRestaurant = {...restaurant,founder:'JEFF',year:1947};
console.log(newRestaurant);




