const mongoose = require("mongoose");

const MainCashSchema = new mongoose.Schema({
   
    Date:{
        type:Date,
        required:true
    },
    Description:{
        type:String,
        required:true,
    
    },
    ChqNo:{
        type:Number,
        required:true,
        
    },
    Debits:{
        type:Float32Array,
        required:true
    },
    Credits:{
        type:Float32Array,
        required:true,
    },
    
    
})

module.exports = mongoose.model('MainCash' ,MainCashSchema )