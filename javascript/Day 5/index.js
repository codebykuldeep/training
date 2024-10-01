let arr = [ 1 ,20 ,33 ,444 ,5 ,6001];

let n= arr.length;
for(let i= 0 ;i<n/2;i++){
    [arr[i],arr[n-i-1]] = [arr[n-1-i],arr[i]];
}
console.log(arr.sort((a,b)=>a-b));

console.log(Math.min(23,4));

let str = 'Hello User';

console.log(str.split(" "));


