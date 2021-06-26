const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const Admin = require("../Modal/Admin");

exports.signup =(req,res) => {
    let {userName , email , password} = req.body ;
    let admin = new Admin({
        userName, 
        email , 
        password ,
    });
    admin.save()
    .then(() => {
        console.log("admin successfully created");
        return res.status(200).send(admin);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
    });
};

exports.login = (req,res) => {
    let {email, password} = req.body;
    Admin.findOne({email : email})
    .then((admin) => {
        console.info(`User with email ${email} was successfully found`);
        if(password == admin.password){
            const token = JWT.sign({
                email : admin.email,
            },
            "AdminKey",
            {
                expiresIn : "1h",
            }
            );
            console.info("LOgin successful");
            return res.status(200).send({admin, token});
        }
        console.warn("Password incorrect");
        return res.status(401).send("Password was Incorrect");
    })
    .catch((error) => {
        console.error(`User with email ${email} does not exist`);
        return res.status(404).send(`User with email ${email} doesn't exist.`);
    });
};