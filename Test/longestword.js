const str = "The quick brownnnn fox jumps over the lazy dog";

let arr = str.split(" ");

let ans = "";
let longestSize = -1;

arr.forEach((word)=>{
    if(word.length >= longestSize){
        ans =word;
        longestSize= word.length;
    }
})

console.log(ans);

