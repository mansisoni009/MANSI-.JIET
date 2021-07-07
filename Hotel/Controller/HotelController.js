const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const Hotel = require("../Model/Hotel");

exports.addHotel = (req , res) => {
    let{name , stars , price , city} = req.body;
    let hotel = new Hotel({
        name , stars , price , city
    });
    hotel.save()
    .then(() => {
        return res.status(200).send(hotel);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
    });
};
exports.getHotel = (req, res) => {
    let {id} = req.params;
    id = mongoose.Types.ObjectId(id);
    Hotel.find({_id : id})
    .then((hotel) => {
        if(hotel){
            console.info("booking found");
            return res.status(200).send(hotel);
        }
        console.error("no booking");
        return res.status(404).send("ERROR");
    })
   .catch((error) => {
        console.log(error);
        return res.status(500).send("ERROR");
    });
};

exports.deleteHotel = (req, res) => {
    Hotel.deleteOne({ _id : req.params.id})
    .then((hotel) => {
        res.status(200).send(hotel);
    })
    .catch((error) => {
        res.status(404).send(error);
    })
};