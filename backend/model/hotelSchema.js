const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
      },
      name: String,
      category: String,
      image: String,
      imageArr: [String],
      address: String,
      city: String,
      state: String,
      country: String,
      price: Number,
      rating: Number,
      numberOfBathrooms: Number,
      numberOfBeds: Number,
      numberOfguest: Number,
      numberOfBedrooms: Number,
      numberOfStudies: Number,
      hostName: String,
      hostJoinedOn: String,
      ameneties: [String],
      healthAndSafety: [String],
      houseRules: [String],
      propertyType: String,
      isCancelable: Boolean
})
const Hotel = mongoose.model("hotel",Schema)
module.exports = Hotel