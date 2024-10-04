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

  //we skipped one lement and moved rest to other forming a new array

  const [a,b,,...others]=[1,2,3,4,5,6];

  console.log(a,b,others);

  const [pizza,risotto,...otherFood] =[...restaurant.mainMenu,...restaurant.starterMenu]

  console.log(pizza,risotto,otherFood);

  /*
  OUTPUT

  Pizza Pasta [
  'Risotto',
  'Focaccia',
  'Bruschetta',
  'Garlic Bread',
  'Caprese Salad'
]
  */

//we can also store some values separately 

const {sat, ...weekday} = restaurant.openingHours;
console.log(sat,weekday);

/*
OP

{ open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }
*/

//for functions
function add(...nums){
    console.log(nums);
    return nums.reduce((total ,i)=>{return total+i},0)
}

console.log(add(1,2,3,4,5,6,7,8));

  