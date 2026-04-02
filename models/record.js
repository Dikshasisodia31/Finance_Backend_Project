import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    type:{
       type:String,
       enum:["income","expense"],
       default:"income",
    },
    date:{
        type:date,
    },

},{timestamps:true});

module.exports = mongoose.model("Record",recordSchema);