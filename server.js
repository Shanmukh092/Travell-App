const express = require("express")

const app = express();
app.use(express.json())

const route = require("./backend/Routes/hotel-routes")
const connection = require("./backend/connection/connection")
const singleRoute = require("./backend/Routes/single-router")
const auth = require("./backend/Routes/authentication")
const newWish = require("./backend/Routes/wishList-route")

app.use("/api/hotels",route);
app.use("/api/single-hotel",singleRoute);
app.use("/auth",auth)
app.use("/api/wish",newWish)

app.get("/",(req,res)=>{
    res.send("response form server")
})

app.listen(3000)