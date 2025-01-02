import express from 'express';
import { add } from './lib/fns';

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello typeScript 123');
})

app.get('/:num1/:num2',(req,res)=>{
    const {num1,num2} = req.params
    res.send('Hello, your addition -> ' + add(+(num1),+(num2)));
})


app.listen(3000,()=>{
    console.log('server is running');
    
})