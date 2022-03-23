<<<<<<< HEAD
const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
   
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

module.exports = mongoose.model('Purchase' ,PurchaseSchema )
=======

const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema({
    
    

    invoice_date:{
        type:Date,
        required:true
    },

    item_name:{
        type:String,
        required:true,
    },

    unit_price:{
        type:Float32Array,
        required:true,
    },

    quantity:{
        type:Number,
        required:true,
    },

    total_amount:{
        type:Float32Array,
        required:true,
    },
     
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true,
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required:true,
    },
    
})
>>>>>>> a09f7e190e15b96d79ddcfb0a91a3a342a6b5a3e
