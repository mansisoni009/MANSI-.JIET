const express = require("express");
const axios = require("axios");
const router = express();
/* const Post = require("../PostModel")
 */
router.get("/", (req , res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
         console.log(response.data);
         this.response = response.data
         /* userId = this.response[0].userId */
         var userId = [];
        for (var i=0 ; i<this.response.length ; i++){
                userId[i] = this.response[i].userId 
            userId[i] = this.response[i].userId
        }
         console.log(userId);
          return res.status(200).send(response.data);  
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("error");
    });
});

module.exports = router;
