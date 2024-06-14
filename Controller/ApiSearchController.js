const Searchmodel = require("../model/SearchModel")

class SearchController {

    AddData = async (req, res) => {
        try {
            const { gender, Cloths_Cataory, price } = req.body
            const postdata = new Searchmodel({
                gender, Cloths_Cataory, price
            })
            const result = await postdata.save()
            if (result) {
                res.status(201).json({
                    success: 1,
                    message: "Data added done...",
                    result
                })
            }
        } catch (error) {
            res.status(404).json({
                error: error.message
            })
        }
    }
    // ******************getdata*****************//
    getdata = async (req, res) => {
        try {
            const Alldata = await Searchmodel.find()
            if (Alldata) {
                res.status(201).json({
                    message: "All data get done..",
                    Alldata
                })
            }
        } catch (error) {
            res.status(404).json({
                error: error.message
            })
        }
    }
    // ***************************Search*****************//
    Search = async (req, res) => {
        try {
            const { keyword } = req.params
            const result = await Searchmodel.find({
                $or: [
                    { gender: { $regex: keyword, $options: "i" } },
                    { Cloths_Cataory: { $regex: keyword, $options: "i" } },
                    { price: { $regex: keyword, $options: "i" } }
                ]
            })
            if (result) {
                res.status(201).json({
                    message: "search data successfully get",
                    result
                })
            }
        } catch (error) {
            res.status(404).json({
                error: error.message
            })
        }
    }
    // -----------------EditData---------------//
    EditData = async (req, res) => {
        try {
            const id = req.params.id
            const edit = await Searchmodel.findById(id)
            if (edit) {
                res.status(200).json({
                    message: "edit data get..",
                    edit
                })
            }
        } catch (error) {
            res.status(404).json({
                error: error.message
            })
        }
    }
    // ***********************UpdateData*****************//
    UpdateData = async (req, res) => {
        try {
            const id = req.params.id
            const { gender, Cloths_Cataory, price } = req.body
            const Updatedata = await Searchmodel.findByIdAndUpdate(id, {
                gender, Cloths_Cataory, price
            }, { new: true })
            if (Updatedata) {
                res.status(200).json({
                    message: 'data update done..',
                    Updatedata
                })
            }
        } catch (error) {
            error: error.message
        }
    }
    // *******************DeleteData*****************//
    DeleteData=async(req,res)=>{
        try{
            const data=await Searchmodel.findByIdAndDelete(req.params.id)
            if(data){
                res.status(200).json({
                    message:"data is deleted",
                    data
                })
            }
        }catch(error){
            res.status(404).json({
                error:error.message
            })
        }
    }


}

module.exports = new SearchController()