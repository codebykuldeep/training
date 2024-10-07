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


//property names
const properties = Object.keys(restaurant.openingHours);

console.log(properties);

//properties values
const properties2 = Object.values(restaurant.openingHours);

console.log(properties2);

//entries object
const properties3 = Object.entries(restaurant.openingHours);

console.log(properties3);

for (const [key,{open,close}] of Object.entries(restaurant.openingHours)) {
    console.log(`${key} - open->${open} and close ->${close}`);
    
}








/*
OUTPUT


[ 'thu', 'fri', 'sat' ]
[
  { open: 12, close: 22 },
  { open: 11, close: 23 },
  { open: 0, close: 24 }
]
[
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]
thu - open->12 and close ->22
fri - open->11 and close ->23
sat - open->0 and close ->24
*/
