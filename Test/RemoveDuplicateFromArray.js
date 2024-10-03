let arr = [1, 2, 3, 2, 4, 3, 5 ,4 , 1 , 3 , 2,-1,0 ,undefined];



let map = {};
let ans =[];
let size = arr.length;

for(let x = 0;x< size ;x++){
    if(arr[x] != undefined ||  arr[x] != null ){
        if(!map[arr[x]]){
            ans.push(arr[x]);
            map[arr[x]]=true;
        }
    }
}

console.log(ans);


