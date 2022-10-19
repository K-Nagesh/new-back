const express = require('express');
const mongoose = require('mongoose');
const BrandName=require('./Data')

const app = express();
app.use(express.json())   // middleware or body-parser


//mongoDB connection

mongoose.connect('mongodb+srv://KNagesh:myUserName@atlascluster.3pbxi8f.mongodb.net/?retryWrites=true&w=majority').then(
        ()=>{
                console.log('DB is Connected');
        }
).catch (err => {
        console.log(err);
})

// Post Method
app.post('/addbrands', async(req,res) => {
    const {brandName} = req.body
    try{
        const newData= new Data({brandName})  // object creating and Schema=Data and brandNamer is variable
        await newData.save()
        return res.json(await BrandName.find())  
    } catch(err){
        console.log(err);
    }
})

//get Method

app.get('/getallbrands', async(req,res) => {
    try{
        const allData = await BrandName.find()
        return res.json(allData)
    } catch (err){
        console.log(err);
    }
})
//particularly with id

app.get('/getbrand/:id', async(req,res) => {
    try{
        const data = await BrandName.findById(req.params.id)
        return res.json(data)
    }catch (err) {
        console.log(err);
    }
})

//delete method

app.delete('/deletebrand', async(req,res) => {
    try{
        await BrandName.findOneAndDelete(req.params.id)
        return res.json(await BrandName.find())
    }catch (err) { console.log(errr); }
})

app.listen(3000, () => {
    console.log('server running...!');
})