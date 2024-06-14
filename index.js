const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const MongodbConnection=require("./Config/Database")
MongodbConnection()

const SearchRoute=require("./Router/SearchRoute")
app.use(SearchRoute)
const port=1000
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})