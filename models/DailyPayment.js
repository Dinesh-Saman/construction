const mongoose = require("mongoose");

const DailyPaymentSchema = new mongoose.Schema({

    Payroll_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payrollSchema"
    },
   
    Date:{
        type:Date,
        required:true
    },

    Payment:{
        type:Float32Array,
        required:true
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

module.exports = mongoose.model('DailyPayment' ,DailyPaymentSchema )