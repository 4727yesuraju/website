import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Item from './model.js';

const app = express();
app.use(express.json());
app.use(cors())

app.get('/',async (req,res)=>{
    const items = await Item.find();
    res.status(200).send(items);
})

app.post('/',async (req,res)=>{
     const item = await Item.create({img:req.body.img});
     res.status(200).send(item);
})
app.delete('/:id',async (req,res)=>{
   try{
    const values = await Item.findByIdAndDelete(req.params.id);
    res.status(200).send("delect successfully");
   }catch(err){
    console.log(err.message);
   }
})

mongoose.connect("mongodb+srv://4727yesuraju:yesu4727raju@cluster0.bho7fd9.mongodb.net/data?retryWrites=true&w=majority")
.then(()=>{
    console.log("database connection is successful");
    app.listen(3000,()=>{
        console.log("server is created at 3000")
    })
})