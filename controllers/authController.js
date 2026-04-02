const User = require("../models/user.js");
const bcrypt = require("bcrypt");


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

