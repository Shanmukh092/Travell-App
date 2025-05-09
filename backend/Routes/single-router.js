const express = require("express")
const route = express.Router()
const { getSingleHotel } = require("../controller/hotel-controller")

route.get("/:id",getSingleHotel)

module.exports = route;