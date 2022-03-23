const mongoose = require("mongoose");

const PurchasePayableSchema = new mongoose.Schema({
   
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

    invoice_no:{
        type:mongoose.Schema.Types.ObjectId,
        ref:""
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

module.exports = mongoose.model('PurchasePayable' ,PurchasePayablegSchema )
