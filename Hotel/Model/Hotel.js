const mongoose = require('mongoose');

// create hotel Schema and model
const Hotel = new mongoose.Schema({

    id:{
        type : mongoose.SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        required: true,
    },
    stars: {
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("hotel", Hotel,"hotel");