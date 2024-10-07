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

//We cannot read this propery as mon donot exist and we accessing open propety of mon so it fill give error
//console.log(restaurant.openingHours.mon.open);

//we can do this
if(restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
}


console.log(restaurant.openingHours.fri.open);

//optional chaining retuns  undefined if property donot exists
console.log(restaurant?.openingHours?.mon?.open);



//use on methods
console.log(restaurant.order(0,1) ?? 'method donot exist');

console.log(restaurant.orderLatest?.(0,1) ?? 'method donot exist');


//array
const users =[{name:'john',age:23}];

console.log(users[0]?.name ?? "Array empty");

