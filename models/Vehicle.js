const mongoose = require("mongoose");


const VehicleSchema = new mongoose.Schema({


    veh_type:{
        type:String,
        required:true
    },
    veh_make:{
        type:String,
        required:true,
        
    },
    veh_model:{
        type:String,
        required:true,
        
    },
    veh_year:{
        type:String,
        required:true
    },
    veh_No:{
        type:String,
        required:true,
        unique:true
    },
    owner_name:{
        type:String,
        required:true,
    },
    purchased_date:{
        type:Date,
        required:true
    },
    registered_date:{
        type:Date,
        required:true
    },
    engine_no:{
        type:Number,
        unique:true,
        required:true
    },
    chassi_no:{
        type:Date,
        unique:true,
        require:true,
    },
    insurance_date:{
        type:String,
        required:true,
    },
    vehicle_weight:{
        type:Number,
        required:true
    },
    manufacture_country:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model('Vehicles' ,VehicleSchema )