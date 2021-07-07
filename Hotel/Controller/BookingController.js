const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const Booking = require("../Model/Booking");

exports.BookHotel = (req,res) => {
    let {userName , email , HotelName , guests , room , checkIn, checkOut } = req.body ;
    let booking = new Booking({
        userName , email , HotelName , guests , room , checkIn, checkOut ,
    });
    booking.save()
    .then(() => {
        console.log("Booking done");
        return res.status(200).send(booking);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
    });
};

exports.getBooking = (req , res) => {
    let { userName } = req.params;
    
    Booking.find({userName : userName})
    .then((booking) => {
        if(booking.length != 0){
            console.info("booking found");
            return res.status(200).send(booking);
        }
        console.error("no booking");
        return res.status(404).send("[]");
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send("ERROR");
    });
} 

