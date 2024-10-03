let str ='programmingzxyppgg';

// let hash = new Array(26).fill(0);
let hash = {};

let arr = str.split("");
let ans ="";

const size = arr.length;

for(let i=0;i<size;i++){
    if(!hash[arr[i]]){
        ans+=arr[i];
        hash[arr[i]]=true;
    }
}

console.log(ans);






// for(let i=0;i<size;i++){
//     if(hash[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0){
//         ans.push(arr[i]);
//         hash[ arr[i].charCodeAt(0) -'a'.charCodeAt(0)]= 1;
//     }
// }