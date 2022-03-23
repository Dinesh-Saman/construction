const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    
    issue_name:{
        type:String,
        required:true
    },
    issue_category:{
        type:String,
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
        required:true
    },
    receive_date:{
        type:String,
        required:true,
    },
    proj_id:{
        type:,
        required:true,
    },
   
})