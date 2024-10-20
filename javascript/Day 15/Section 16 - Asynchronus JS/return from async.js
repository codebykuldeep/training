
 const getDataWithError = async ()=>{
    try{
        const res=  await fetch('https://dummyjson.com/users/1')
        if(!res.ok)
            throw new Error('WRONG API')
        
        const data =await res.json();
 
    //  console.log(data.firstName);
     return data.firstName +data.lastName;
    }
    catch(err){
        console.log(err);
        
    }
     
    
 }
 

 //so if we try to get data from async function we will get promise pending
 let name = getDataWithError();

 //without any then
 console.log(name);

 getDataWithError().then(res =>{
    name = res;
    console.log(name);
 })
 .catch(err=> console.log(err)
 )

 //also can be done by using a aysnc function 
 let a;
 const getName=async()=>{
    a = await getDataWithError();
    console.log('Async called');
    
    console.log(a);
    
 }
 getName();
 
 
 