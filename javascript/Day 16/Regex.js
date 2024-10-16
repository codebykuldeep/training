const reg = new RegExp('is','g');

let text = "Is this all there is?";
// g is for global search
let patternGlobal = /is/g;
let patternCase = /is/i;
let result = text.match(reg);

console.log('match' , result);

// i is case insensitive and gi for both

console.log(patternGlobal.global);
console.log(patternCase.ignoreCase);

//case sensitive is d
let patternSensitive =/is/d;
console.log(patternSensitive);


//do a mutli line search using m
text = `Is this
all there
is`

let patternMulti = /is/m;

console.log(text.match(patternMulti));




