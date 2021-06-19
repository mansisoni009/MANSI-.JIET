const express = require("express");
const router = express();
const JWT = require("jsonwebtoken")
const userController = require("../Controller/UserController");
const user = require("../model/user");



router.post("/signup",userController.signup);

router.post("/login",userController.login);

router.get("/:email", userController.getUser);

router.post("/postblog", userController.postblog);

router.get("/getblog/userid/:userId", userController.getblog);

module.exports = router;