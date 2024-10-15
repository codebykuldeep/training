// const getData =()=>{
//      fetch('https://dummyjson.com/users')
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
        
//     })

// }

const getData =()=>{
    fetch('https://dummyjson.com/users')
   .then(response=>response.json())
   .then(({users}) => console.log(users.length))

}

getData();


//chaining in promises
const result =[];
const chainedData =()=>{
    fetch('https://dummyjson.com/users/1')
   .then(response=>response.json())
   .then(data =>{
    result.push(data.firstName);
    return fetch('https://dummyjson.com/users/2')
   })
   .then(response=>response.json())
   .then(data =>{
    result.push(data.firstName);
    return fetch('https://dummyjson.com/users/3')
   })
   .then(response=>response.json())
   .then(data =>{
    result.push(data.firstName);
    console.log(result);
   })

   
}

chainedData();



//error handling in promises
const errorHandle =()=>{
    fetch('https://dummyjson.com/users')
   .then(response=>response.json())//,err=> console.log('ERROR'))
   .then(({users}) => console.log(users.length))

}

errorHandle();

const usingCatch =()=>{
    fetch('https://dummyjson.com/usersasnc')
   .then(response=>response.json()
   )
   .then(({users}) => console.log(users.length))
   .catch(err=>console.error("ERROR"))
   .finally(()=>{console.log('Wrong API is used')})
}

usingCatch();





/*
30
ERROR
Wrong API is used
undefined:1
*/


