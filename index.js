
const express = require("express")
const app = express()
const connectToDatabase = require("./db");

connectToDatabase()


app.use(express.json())

app.get("/test" , (req,res)=>{
    try {
        res.status(200).json({message:"this is test route"})
    } catch (error) {
        res.status(500).json({message:"somthing wrong"})
    }
})

app.listen(8000,()=>{
    console.log("server started")
})
