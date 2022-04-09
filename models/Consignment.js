const mongoose = require("mongoose");


const ConsignmentSchema = new mongoose.Schema({


    transport_id:{
        type:String,
        required:true,
        unique:true
    },
    transport_date:{
        type:Date,
        required:true,
        
    },
    transport_from:{
        type:String,
        required:true,
        
    },
    transport_to:{
        type:String,
        required:true,
    },
    consigner:{
        type:String,
        required:true,
    },
    consignee:{
        type:String,
        required:true,
    },
    route:{
        type:Number,
        required:true
    },
    max_weight:{
        type:Number,
        required:true
    },
    driver:{
        type:String,
        required:true
    },
    assistance_driver:{
        type:String,
        require:true,
    },
    carrier:{
        type:String,
        required:true,
    },
    distance:{
        type:Number,
        required:true
    },
    
})

module.exports = mongoose.model('Consignments' ,ConsignmentSchema )