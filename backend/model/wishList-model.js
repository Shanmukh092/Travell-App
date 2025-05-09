const mongoose = require("mongoose")
const wishListSchema = mongoose.Schema({
    hotelId:{type:String,required:true}
})

const Wish = mongoose.model("wishList",wishListSchema)

module.exports = Wish