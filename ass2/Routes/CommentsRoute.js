const express = require("express");
const axios = require("axios");
const router = express();
const postRoute = require("../Routes/PostRoute");


router.get("/get-comments:userId",(req,res) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
    .then((response) => {
        console.log(response.data);
        return res.status(200).send("request successful");
        
    })
    .catch((error) => {
        return res.status(500).send("error");
    });
});

module.exports = router;
