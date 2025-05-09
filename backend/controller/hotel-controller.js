const Hotel = require("../model/hotelSchema")

const getAllHotels = (req, res) => {
Hotel.find()
    .then((hotels)=>res.json(hotels))
    .catch((err)=>res.json({message: "Error fetching hotels", error: err}))
}

const getSingleHotel = (req,res)=>{
    const {id} = req.params;
    Hotel.findOne({id:id}).then((data)=>res.send(data))
    .catch(()=>res.send("failed to fetch data"));
}

module.exports = {getAllHotels,getSingleHotel}