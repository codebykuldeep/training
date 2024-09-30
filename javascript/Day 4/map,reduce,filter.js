const arr = [2,4,5,8];

let a = arr.map((x,index,ar)=>{
    
    return x*2;
})



let b = arr.filter((x,index,ar)=>{
    if(x%2===0)
        return x;
    
})


let c = arr.reduce((acc,curr,index,ar)=>{
    if(curr>acc)
        return curr;

    return acc;
},0) // initial value of accumlator of reduce 

let d = arr.reduce((acc,curr,index,ar)=>{
    if(curr%2 ===0)
        return acc + curr;

    return acc;
},0)



console.log(a,b,c,d);


let hash = new Array(26).fill(0);

const users =[
    {name:'abc',age:"26"},
]

const obj ={name:'abc',age:"26"};

console.log(Object.entries(obj));


