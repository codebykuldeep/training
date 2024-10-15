
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
 
 //here we are using fetching data one after another but it is not necessary to do it like that
 const getName=async(a,b,c)=>{
    const data1 = await getDataWithError(a);
    const data2 = await getDataWithError(b);
    const data3 = await getDataWithError(c);
    
    
    console.log(data1,data2,data3);
    
    
 }
 getName(1,2,3);


 const fetchParallel =async(a,b,c)=>{
    const arrData = await Promise.all([getDataWithError(a),getDataWithError(b),getDataWithError(c)])
    
    console.log(arrData);
    
 }
 fetchParallel();

 
 
 