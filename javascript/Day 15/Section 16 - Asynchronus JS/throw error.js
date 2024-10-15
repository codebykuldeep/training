//Throwing errors
const throwError =(errorMsg ='Something went wrong')=>{
    fetch('https://dummyjson.com/usersabcds')
   .then(response =>{
    if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
   })//,err=> console.log('ERROR'))
   .then(({users}) => console.log(users.length))
   .catch(err => console.log(err)
   )

}

throwError();