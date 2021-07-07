const express = require("express");
const router = express();
const hotelController = require("../Controller/HotelController");

router.post("/admin/add-hotel", hotelController.addHotel);

router.delete("/admin/delete-hotel",hotelController.deleteHotel );

router.get("./admin/get-hotel/:id", hotelController.getHotel);

module.exports = router;
