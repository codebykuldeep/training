import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
    res.flash('hello');

})

app.listen(3000,()=>{
    console.log('server is running');
    
})