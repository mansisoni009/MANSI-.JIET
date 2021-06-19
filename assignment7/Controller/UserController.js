const User = require("../model/user");
const Blog = require("../Model/blog");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

exports.signup = (req,res) => {
    let {firstName,lastName,email, password,dob} = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
        dob,
    });
    user.save()
    .then(() => {
        return res.status(200).send(user);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
    });
};

exports.login = ((req,res) => {
    let {email,password} = req.body;
    User.findOne({email : email})
    .then((user) => {
        console.info(`User with email ${email} was successfully found`);
        if(password == user.password){
            const token = JWT.sign({
                email : user.email,
            },
            "BLOGKey",
            {
                expiresIn : "1h",
            });
            console.info("Login Succesful");
            return res.status(200).send({user, token});
        }
        console.warn("password incorrect");
        return res.status(401).send("password is incorrect");
    })
    .catch((error) => {
        console.error(`User with email ${email} was not found`);
        return res.status(404).send(`User with email ${email} was not found`)
    });
});

exports.getUser = (req,res) => {
    let email = req.params.email;
    User.findOne({email : email})
    .then((user) => {
        if(user) {
            console.info("user found");
            return res.status(200).send(user);
        }
        console.error("User was not found");
        return res.status(500).send("ERROR");
    });
};

exports.postblog = (req,res) => {
    let{heading, blogdisc, userId} = req.body;
    let blog = new Blog({
        heading, blogdisc, userId,
    });
    blog.save()
    .then((blog) => {
        return res.status(200).send(blog);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
    });
};

exports.getblog = (req,res) => {
    let { userId } = req.params;
    userId = mongoose.Types.ObjectId(userId);
    Blog.find({userId : userId})
    .then((blog) => {
        if(blog.length != 0){
            console.info("blog found");
            return res.status(200).send(blog);
        }
        console.error("no such blog found");
        return res.status(404).send("[]");
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send("ERROR");
    });
}; 