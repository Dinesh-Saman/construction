const mongoose = require("mongoose");


const InspectionSchema = new mongoose.Schema({

    inspection_date:{
        type:Date,
        required:true,  
    },
    veh_no:{
        type:String,
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