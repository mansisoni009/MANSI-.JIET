const express = require("express");
app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/UserRoute");
const adminRoute = require("./Routes/AdminRoute");

app.use(express.urlencoded({extended : false}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blogdb" , {
    useUnifiedTopology : true ,
    useNewUrlParser : true ,
})
.then(() => {
    console.info("Mongodb connenction successful");
})
.catch(() => {
    console.error("Mongodb connenction unsuccessful")
});

app.use(userRoute);
app.use(adminRoute);

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});