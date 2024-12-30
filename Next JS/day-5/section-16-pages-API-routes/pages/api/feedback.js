import path from 'path';
import fs from 'fs'
function handler(req,res){
    if(req.method === "POST"){
        const email =req.body.email;
        const text =req.body.text;

        const newFeedback={
            id:new Date().toISOString(),
            email:email,
            text:text,
        }

        const filePath =path.join(process.cwd(),'data','feedback.json');
        const fileData =fs.readFileSync(filePath);
        const data =JSON.parse(fileData);
        data.push(newFeedback);
        fs.writeFileSync(filePath,JSON.stringify(data));

        return res.status(201).json({message:'Success !',feedback:newFeedback})
    }
    else if(req.method === 'GET'){
        const filePath =path.join(process.cwd(),'data','feedback.json');
        const fileData =fs.readFileSync(filePath);
        const data =JSON.parse(fileData);
        return res.json(data);
    }
    
    return res.json({
        message:'THIS WORKS'
    });
}

export default handler;