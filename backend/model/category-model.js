const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    }
})

const Category = mongoose.model("catogrie",CategorySchema)

module.exports = Category