import mongoose from "mongoose";
import user from "./user";

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
        type:Date,
        default:Date.now
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{timestamps:true});

module.exports = mongoose.model("Record",recordSchema);