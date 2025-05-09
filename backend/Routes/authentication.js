const express = require("express")
const route = express.Router()
const signUpHandler = require("../controller/signUp-handler")
const loginHandler = require("../controller/login-handler")
require("dotenv").config();

route.post("/register",signUpHandler)

route.post("/login",loginHandler)

module.exports = route;