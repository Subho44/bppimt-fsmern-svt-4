const dotenv = require("dotenv");
dotenv.config();


const express = require('express');
const app = express();
express.json();

const products = [
    {id:1, name:"lap"},
    {id:2, name:"tab"},
    {id:3, name:"mob"},

];

//base routing
app.get('/',(req,res)=>{
    res.send("api is working")
});

app.get("/home",(req,res)=>{
    res.send("this is home page")
})

app.get("/products",(req,res)=>{
   res.json(products);
})

const port = process.env.port ;
app.listen(port, ()=>{
    console.log("server is running port 5700")
});

