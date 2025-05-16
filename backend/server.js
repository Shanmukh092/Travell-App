const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())
 
const route = require("./Routes/hotel-routes")
const connection = require("./connection/connection")
const singleRoute = require("./Routes/single-router")
const auth = require("./Routes/authentication")
const newWish = require("./Routes/wishList-route")

app.use("/api/hotels",route);
app.use("/api/single-hotel",singleRoute);
app.use("/auth",auth)
app.use("/api/wish",newWish)

app.get("/",(req,res)=>{
    res.send("response form server")
})

app.listen(8080)