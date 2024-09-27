const newSet = new Set();


newSet.add('a');
newSet.add('b');

newSet.add('a');

newSet.add('d');


// return list of iterator
const itr = newSet.values();

console.log(itr);


//loop through Set
for(let x of newSet){
    console.log(x);
    
}

