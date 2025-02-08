const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Alumni","Student"],
        default: "Student"
    },
    alumniRequest: {
        type: Boolean,
        default: false 
    },
    isApproved: {
        type: Boolean,
        default: false 
    }
});

module.exports = mongoose.model("userScehma",userSchema);
