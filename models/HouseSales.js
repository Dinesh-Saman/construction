const mongoose = require("mongoose");

const HouseSalesSchema = new mongoose.Schema({
   
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
    Amount:{
        type:Float32Array,
        required:true
    },

    Project_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProjectSchema"
    },

    Acc_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"JournalAccounts"
    },
    
    Transaction_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MainCashSchema"
    },
    
})

module.exports = mongoose.model('HouseSales' ,HouseSalesSchema )