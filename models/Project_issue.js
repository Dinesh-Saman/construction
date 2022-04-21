const mongoose = require("mongoose");

const Project_issueSchema = new mongoose.Schema({
    
    issue_name:{
        type:String,
        required:true
    },
    issue_category:{
        type:String,
        enum:["ACCESSORIES","MATERIALS"],
        required:true,
        unique:true
    },
    issue_quantity:{
        type:String,
        required:true,
        unique:true
    },
    receive_status:{
        type:String,
        enum: ["yes", "No"],
    },
    receive_date:{
        type:Number,
        required:true,
    },
    proj_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
     
   
})
module.exports = mongoose.model("Project_issue" , Project_issueSchema)