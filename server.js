const express=require("express");
const connectdb=require("./config/connectdb")
const app=express()
connectdb()
const port= process.env.PORT   
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is run "+ process.env.PORT));                                         
require('dotenv').config()
app.use(express.json())
app.use("/product",require('./routes/produit'))