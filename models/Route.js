const mongoose = require("mongoose");


const RouteSchema = new mongoose.Schema({


    route_id:{
        type:String,
        required:true,
        unique:true
    },
    transport_from:{
        type:String,
        required:true,
        
    },
    transport_to:{
        type:String,
        required:true,
        
    },
    distance:{
        type:Number,
        required:true,
    },
    road_numbers:{
        type:Number,
        required:true,
    },
    traffic_level:{
        type:String,
        required:true,
    },
  
    
})

module.exports = mongoose.model('Routes' ,RouteSchema )