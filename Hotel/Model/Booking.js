const mongoose = require("mongoose");

const Booking = new mongoose.Schema({
    id:{
        type : mongoose.SchemaTypes.ObjectId,
    },
    userName :{
        type : String,
        required : true,
    },
   email: {
        type : String,
        required : true,
    },
    HotelName: {
        type : String,
        required : true,
    },
    guests : {
        type : String,
        required : true,
    },
    checkIn : {
        type : Date,
        required: true,
    },
    checkOut : {
        type : Date,
        required: true,
    },
    room : {
        type : String,
        required : true,
    },
    

})
module.exports = mongoose.model("booking", Booking,"booking");