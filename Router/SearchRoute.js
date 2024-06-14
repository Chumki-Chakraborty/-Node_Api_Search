const express=require("express")
const ApiSearchController = require("../Controller/ApiSearchController")
// const { model } = require("mongoose")

const SearchRoute=express.Router()

SearchRoute.post("/postdata",ApiSearchController.AddData)
SearchRoute.get("/getdata",ApiSearchController.getdata)
 SearchRoute.get('/searchdata/:keyword',ApiSearchController.Search)
SearchRoute.get("/editdata/:id",ApiSearchController.EditData)
SearchRoute.post("/updatedata/:id",ApiSearchController.UpdateData)
SearchRoute.get("/deletedata/:id",ApiSearchController.DeleteData)
module.exports=SearchRoute