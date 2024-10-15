
const getDataWithError = async (i)=>{
    try{
        const res=  await fetch(`https://dummyjson.com/users/${i}`)
        if(!res.ok)
            throw new Error('WRONG API')
        
        const data =await res.json();
 
    //console.log(data.firstName);
     return data.firstName;
    }
    catch(err){
        console.log(err);
        
    }
     
    
 }
 


 const fetchParallel =async(a,b,c)=>{
    const arrData = await Promise.all([getDataWithError(a),getDataWithError(b),getDataWithError(c)])
    
    console.log(arrData);
    
 }
 fetchParallel(1,2,3);

 //it will short circuit if one of promise failse
 
 