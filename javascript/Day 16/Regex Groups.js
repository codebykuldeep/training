let pattern = /[abc]/g;

//[abc] means  text should contain only a,b,c characters


console.log('ab bc am'.match(pattern));


console.log('hello i am using Regex'.match(pattern));

let num = /[0-9]/g;

console.log('asd 34 3422 22 '.match(num));

let mixPattern = /[a-e0-9]/g;


console.log('13 asd eee 34 3422 22 '.match(mixPattern));



//Meta keywords
//. - global search between tw0 character
let dot =/h.t/g;

console.log('That`s why this is a hat for That'.match(dot));

//  \w - all global search for word characters with _
console.log('THat 100%..'.match(/\w/g));

// \W - for non word characters

// \d for digits
// \D for non-digits
// \b for beginning

