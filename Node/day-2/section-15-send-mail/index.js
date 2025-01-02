import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send('HELLO')
})

app.listen(3000,()=>{
    console.log('SERVER IS RUNNING');
    
})