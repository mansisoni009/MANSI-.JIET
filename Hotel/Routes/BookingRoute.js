 const express = require("express");
const router = express();
const JWT = require("jsonwebtoken");
const bookingController = require("../Controller/BookingController");

router.post("/booking", bookingController.BookHotel);

router.get("/all-booking",bookingController.getBooking);

module.exports = router; 

