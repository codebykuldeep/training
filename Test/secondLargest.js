const arr = [2 ,5 ,7 ,3 , 9 , 4 ,8 ,6,20];

let second =Number.MIN_SAFE_INTEGER;
let largest =Number.MIN_SAFE_INTEGER;

let size =arr.length;

for(let i =0 ;i< size ;i++){
    if(arr[i] > largest){
        second = largest;
        largest = arr[i];
    }
    if(arr[i]> second && arr[i] != largest){
        second =arr[i];
    }
}

console.log(second);
