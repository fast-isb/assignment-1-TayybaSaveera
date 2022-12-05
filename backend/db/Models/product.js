const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name :{
        type: String,
    },
    Description : {
        type:String,
    },
    Price :{
        type: Number,
    },
    Quantity : {
        type:Number},
    },
    {Image : {
        type: String,
    }
})

module.exports = mongoose.model("products", productSchema)