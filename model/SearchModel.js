const mongoose=require("mongoose")


const Schema=mongoose.Schema

const SearchSchema=new Schema({
    gender:{
        type:String,
        required:true
    },
    Cloths_Cataory:{
        type:String,
        required:true 
    },
    price:{
        type:String,
        required:true 
    },
    status:{
        type:String,
        default:1 
    },
    

})
const searchModel=mongoose.model("search",SearchSchema)
module.exports=searchModel