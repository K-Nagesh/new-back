
const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req,res)=>{
    res.send('<h1>Hello Server<h1>')
});

const products = [
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"samsung"
    },
    {
        id:3,
        name:"iqoo"
    },
    {
        id:4,
        name:"realme"
    },
    {
        id:5,
        name:"vivo"
    }
]

app.get('/products',(req,res)=>{
    res.json(products)
});

app.get('/products/:id',(req,res)=>{
    const newData=products.filter(item=>item.id.toString()===req.params.id)
    return res.send(newData)
});

app.post('/addproducts',(req,res)=>{
    const {id,name} = req.body;  
    console.log(id,name);
    return res.send('Data stored !!')
})
app.listen(5000, ()=>{
    console.log('server is running');                      
})