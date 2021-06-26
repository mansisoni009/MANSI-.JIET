const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/UserRoute");
const adminRoute = require("./Routes/AdminRoute");
/* const cors = require("cors"); */

app.use(express.urlencoded({extended: false}));
app.use(express.json());
/* app.use(cors()); */

mongoose.connect("mongodb://localhost:27017/Hotel_Bookings" , {
    useUnifiedTopology : true ,
    useNewUrlParser : true,
})
.then(() => {
    console.log("mongodb connection succesful");
})
.catch(() => {
    console.error("mongodb connection unsuccessful");
});

app.use(userRoute);
app.use(adminRoute);

const PORT = 8080;

app.listen(PORT , () => {
    console.log(`My server is running on the port ${PORT}`);
})