const express = require("express")

const route = express.Router()
const { getAllHotels } = require("../controller/hotel-controller");


route.get("/", getAllHotels);

module.exports = route