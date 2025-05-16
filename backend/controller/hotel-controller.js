const Hotel = require("../model/hotelSchema")
const Category = require("../model/category-model")

const getAllHotels = (req, res) => {
    const category = req.query.category;
    // console.log(category)
    if(category!=undefined){
        Hotel.find({category})
        .then((category)=>{
            if(category){
                res.send({
                    ok:true,
                    data:category
                })
            }
            else{
                res.send({
                    ok:false,
                    message:"No hotel is present with given category"
                })
            }
        })
        .catch(()=>res.send({
            ok:false,
            message:"Unable to fetch Data"
        }))
    }
    else{
        Hotel.find()
        .then((hotels)=>res.send({
            ok:true,
            hotels
        }))
        .catch((err)=>res.json({message: "Error fetching hotels", error: err}))
    }
}

const getSingleHotel = (req,res)=>{
    const {id} = req.params;
    Hotel.findOne({id:id}).then((data)=>res.send(data))
    .catch(()=>res.send("failed to fetch data"));
}

const getAllCategories = (req,res)=>{
    Category.find()
    .then((data)=>res.send({
        ok:true,
        length:data.length,
        category:data
    }))
    .catch(()=>res.send({
        ok:false,
        message:"Failed to Fetch Data.."
    }))
}

module.exports = {getAllHotels,getSingleHotel,getAllCategories}