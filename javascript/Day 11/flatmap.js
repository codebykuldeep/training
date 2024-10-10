const accounts =[
    {
        movements:[23424,4235,-325,-234,23423]
    },
    {
        movements:[2344,-45,45345,324]
    },
    {
        movements:[3454,5436,345345,3434]
    }
]

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap -> if works like first map then flat them
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);




/*
456160
456160

*/