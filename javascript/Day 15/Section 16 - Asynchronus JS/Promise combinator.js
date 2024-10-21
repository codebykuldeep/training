
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
 

//promise race return the first promise is resolved first
 const fetchFirst =async(a,b,c)=>{
    const data = await Promise.race([getDataWithError(a),getDataWithError(b),getDataWithError(c)])
    
    console.log(data);
    
 }
 fetchFirst(1,2,3);

 const timeout = function(sec){
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request took too long'))
        }, sec*1000);
    })
 }


 //this is will check whether data is fetched within a given time or not
 Promise.race([getDataWithError(1),timeout(2)])
 .then(res => console.log(res))
 .catch(err=> console.error(err))

////allsettled - it will not short circuit  like any that  will short circuit if one of promise failse
Promise.allSettled([Promise.resolve('Resolved 1'),Promise.reject('Rejected') ,Promise.resolve('Resolved 2')])
.then(res => console.log(res))
.catch(err=> console.error(err))

//PRomise.any -> it will give any promise which is resolved
Promise.any([Promise.resolve('Resolved 1'),Promise.reject('Rejected') ,Promise.resolve('Resolved 2')])
.then(res => console.log(res))
.catch(err=> console.error(err))

 /*
 [
  { status: 'fulfilled', value: 'Resolved 1' },       
  { status: 'rejected', reason: 'Rejected' },
  { status: 'fulfilled', value: 'Resolved 2' }        
]
Resolved 1
Emily
Emily
 */

 
 
 