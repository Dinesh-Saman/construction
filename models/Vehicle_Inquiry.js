const mongoose = require("mongoose");


const InquirySchema = new mongoose.Schema({


    inquiry_id:{
        type:String,
        required:true,
        unique:true
    },
    inquiry_name:{
        type:String,
        required:true,  
    },
    inquiry_date:{
        type:Date,
        required:true,
    },
    veh_type:{
        type:String,
        required:true,
        
    },
    veh_make:{
        type:String,
        required:true
    },
    veh_model:{
        type:String,
        required:true,
    },
    problem_description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    
    
})

module.exports = mongoose.model('Inquries' ,InquirySchema )