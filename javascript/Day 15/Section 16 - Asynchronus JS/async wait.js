


//chaining in promises
// const result =[];

// const chainedData =()=>{
//     fetch('https://dummyjson.com/users/1')
//    .then(response=>response.json())
//    .then(data =>{
//     result.push(data.firstName);
//     return fetch('https://dummyjson.com/users/2')
//    })
//    .then(response=>response.json())
//    .then(data =>{
//     result.push(data.firstName);
//     return fetch('https://dummyjson.com/users/3')
//    })
//    .then(response=>response.json())
//    .then(data =>{
//     result.push(data.firstName);
//     console.log(result);
//    })

   
// }

//chainedData();


const getData = async ()=>{
    const res=  await fetch('https://dummyjson.com/users')
     const data =await res.json();
 
     console.log(data.users.length);
     
    
 }
 
 getData();

 const getDataWithError = async ()=>{
    try{
        const res=  await fetch('https://dummyjson.com/user/sdasd')
        if(!res.ok)
            throw new Error('WRONG API')
        
        const data =await res.json();
 
     console.log(data.users.length, '2');
    }
    catch(err){
        console.log(err);
        
    }
     
    
 }
 
 getDataWithError();