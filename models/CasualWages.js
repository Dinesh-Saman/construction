const mongoose = require("mongoose");

const CasualWagesSchema = new mongoose.Schema({

    Payroll_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payrollSchema"
    },
   
    Basic_Salary:{
        type:Float32Array,
        required:true
    },

    OT:{
        type:Float32Array,
        required:true
    },

    Leaves:{
        type:Float32Array,
        required:true
    },

    Net_Salary:{
        type:Float32Array,
        required:true
    },

    
    Emp_Acc_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BankAccountSchema"
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

module.exports = mongoose.model('CasualWages' ,CasualWagesSchema )