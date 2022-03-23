<<<<<<< HEAD
=======
const mongoose = require("mongoose");
>>>>>>> 825f6c697bd0199b30674c6e8aec1f373533e4bc


<<<<<<< HEAD

const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema({
    

    invoice_date:{
        type:Date,
        required:true
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


module.exports=mongoose.model("Purchase",PurchaseSchema)

=======
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
>>>>>>> 825f6c697bd0199b30674c6e8aec1f373533e4bc
