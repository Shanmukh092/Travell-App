const express = require("express")

const route = express.Router()
const { getAllHotels, getAllCategories } = require("../controller/hotel-controller");


route.get("/", getAllHotels);
route.get("/category",getAllCategories)

module.exports = route