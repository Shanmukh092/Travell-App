const express = require("express")
const Wish = require("../model/wishList-model")
const route = express.Router()
const verifyUser = require("../middleware/verify-user")
const {addWishHandler,deleteWishHandler,getAllWishHandler} = require("../controller/wihsList-coltroller")


route.post("/add-wish",addWishHandler)
route.post("/remove-wish/:id",deleteWishHandler)
route.get("/get-all-wish-list-hotels",getAllWishHandler)
module.exports = route