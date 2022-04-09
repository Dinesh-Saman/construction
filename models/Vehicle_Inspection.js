const mongoose = require("mongoose");


const InspectionSchema = new mongoose.Schema({


    inspection_id:{
        type:String,
        required:true,
        unique:true
    },
    inspection_date:{
        type:Date,
        required:true,  
    },
    veh_no:{
        type:Number,
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
    owner_name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    
    
})

module.exports = mongoose.model('Inspections' ,InspectionSchema )