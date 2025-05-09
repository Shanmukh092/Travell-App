const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://localhost:27017/travellAppDB")
    .then(()=>console.log("connected to DB Sucessfully"))
    .catch(()=>console.log("failed to connect to DB"))

module.exports = connection