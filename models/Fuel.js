const mongoose = require("mongoose");


const FuelSchema = new mongoose.Schema({


    fuel_lastdate:{
        type:Date,
        required:true
    },
    fuel_type:{
        type:String,
        required:true,
        
    },
    veh_no:{
        type:String,
        required:true,
        
    },
    veh_year:{
        type:Number,
        required:true,
    },
    veh_make:{
        type:String,
        required:true,
        unique:true
    },
    veh_model:{
        type:String,
        required:true,
    },
    quentity:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    old_reading:{
        type:Number,
        required:true
    },
    new_reading:{
        type:Number,
        require:true,
    },
    usage:{
        type:Number,
        required:true,
    },
    dri_name:{
        type:String,
        required:true
    },
    total_capacity:{
        type:Number,
        required:true
    },
    fuel_cost:{
        type:Number,
        required:true
    },
    
})

module.exports = mongoose.model('Fuels' ,FuelSchema )