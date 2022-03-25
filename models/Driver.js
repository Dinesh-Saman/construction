const mongoose = require("mongoose");


const DriverSchema = new mongoose.Schema({


    dri_name:{
        type:String,
        required:true
    },
    dri_nic:{
        type:String,
        required:true,
        
    },
    dri_address:{
        type:String,
        required:true,
        
    },
    dri_contact:{
        type:String,
        required:true
    },
    dri_dob:{
        type:String,
        required:true,
        unique:true
    },
    dri_district:{
        type:String,
        required:true,
    },
    dri_province:{
        type:Date,
        required:true
    },
    dri_licenno:{
        type:Date,
        required:true
    },
    dri_licenvalidity:{
        type:Number,
        unique:true,
        required:true
    },
    dri_issuedate:{
        type:Date,
        unique:true,
        require:true,
    },
    
})

module.exports = mongoose.model('Drivers' ,DriverSchema )