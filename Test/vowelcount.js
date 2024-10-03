let str= 'Hello world';

let count ={
    a:0,
    e:0,
    i:0,
    o:0,
    u:0
}

str = str.toLowerCase();
let n = str.length;
for(let i=0;i<n;i++){
    if(str[i] === 'a' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'e' || str[i] === 'u' ){
        count[str[i]]++;
    }
}

console.log(count);

