const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.register = async(req,res,next) => {
    try{
        const {name,email,password,role,status} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role,
            status,
        });
        res.status(201).json({
            message:"User created successfully",
            user
        });

    }catch(error){
        console.log(error);
    }
};

module.exports.login = async(req,res,next) => {
    try{
       const {email,password} = req.body;
       const user = await User.findOne({email});
       if(!user){
          return res.status(400).json({
            message:"Invalid email"
          });
       }
       const isMatch = await bcrypt.compare(password, user.password);
       if(!isMatch){
          return res.status(400).json({
            message:"Invalid credentials"
          });
       }
       const token = jwt.sign(
        {
        id:user_id,
        role:user.role
       },
       "secretkey",
       {expiresIn:"1d"}
    );
    res.json({
        message : "Login sucessful",
        token
    })
    }catch(error){
         console.log(error);
    }
};

