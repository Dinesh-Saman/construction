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
        type:Number,
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
        type:String,
        required:true
    },
    dri_licenno:{
        type:Number,
        required:true
    },
    dri_licenvalidity:{
        type:Number,
        required:true
    },
    dri_issuedate:{
        type:Date,
        require:true,
    },
    
})

module.exports = mongoose.model('Drivers' ,DriverSchema )