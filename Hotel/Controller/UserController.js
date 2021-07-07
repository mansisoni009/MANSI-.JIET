const User = require("../Model/user");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");


exports.signup = (req,res) => {
    let {userName , email , password} = req.body;
    let user = new User({
        userName ,
        email , 
        password ,
    });
    user.save()
    .then(() => {
        return res.status(200).send(user);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR OCCURED WHILE SIGNUP");
    });
};

exports.login = (req,res) => {
    let {email, password} = req.body;
    User.findOne({email : email})
    .then((user) => {
        console.info(`User with email ${email} was successfully found`);
        if(password == user.password){
            const token = JWT.sign({
                email : user.email,
            },
            "UserKey",
            {
                expiresIn : "48h",
            }
            );
            console.info("LOgin successful");
            return res.status(200).send({user, token});
        }
        console.warn("Password incorrect");
        return res.status(401).send("Password was Incorrect");
    })
    .catch((error) => {
        console.error(`User with email ${email} does not exist`);
        return res.status(404).send(`User with email ${email} doesn't exist.`);
    });
};
 
 