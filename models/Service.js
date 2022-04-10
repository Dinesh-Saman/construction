const mongoose = require("mongoose");


const ServiceSchema = new mongoose.Schema({

    service_start_date:{
        type:Date,
        required:true,
        
    },
    last_service_date:{
        type:Date,
        required:true,
        
    },
    next_service_date:{
        type:Date,
        required:true
    },
    service_period:{
        type:Number,
        required:true,
    },
    veh_no:{
        type:String,
        required:true
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
        required:true
    },
    service_cost:{
        type:Number,
        require:true,
    },
    veh_owner:{
        type:String,
        require:true,
    },
    
})

module.exports = mongoose.model('Services' ,ServiceSchema )