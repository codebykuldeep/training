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


  const arr = [2 ,3 ,4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  console.log(a,b,c);

  const [x,y,z] = arr;

  console.log(x,y,z);
  

  let [first ,second] = restaurant.categories;

  console.log(first,second);

  //swap without third

[second,first] =[first,second];

console.log(first,second);

//getting array of value from a function

console.log(restaurant.order(1,2));

const [item1,item2] = restaurant.order(1,2);

console.log(item1,item2);


const nested = [1,[2,3]];

const [i,[j,k]]= nested;

console.log(i,j,k);

//default value

const [q=1,r=1,p=1] = [6,7];

console.log(q,r,p);






  
  