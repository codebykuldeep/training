//Feature in ES2022
console.log('FETCHING.....');

const res = await fetch('https://dummyjson.com/users');
const data = await res.json();
console.log(data);

export default data;