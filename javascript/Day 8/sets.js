const orderSet = new Set(['a','b','d','a','e','b']);

console.log(orderSet);


console.log(orderSet.size);

console.log(orderSet.has('a'));


orderSet.add('pizza');

console.log(orderSet.has('pizza'));

orderSet.delete('d');

console.log(orderSet);

//orderSet.clear();
for (const element of orderSet) {
    console.log(element);
    
}

//count unique char in string
console.log(new Set('kuldeep kumar').size);


/*
OUTPUT

Set(4) { 'a', 'b', 'd', 'e' }
4
true
true
Set(4) { 'a', 'b', 'e', 'pizza' }
a
b
e
pizza
10
*/

