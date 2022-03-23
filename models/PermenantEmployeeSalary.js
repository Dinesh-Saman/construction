const mongoose = require("mongoose");

const PermanentEmployeeSalarySchema = new mongoose.Schema({

    Project_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:""
    },
   
    Basic_Salary:{
        type:Float32Array,
        required:true
    },

    Staff_Allowances:{
        type:Float32Array,
        required:true
    },

    Gratuity:{
        type:Float32Array,
        required:true
    },

    OT:{
        type:Float32Array,
        required:true
    },

    Salary_Advanced:{
        type:Float32Array,
        required:true
    },

    Leaves:{
        type:Float32Array,
        required:true
    },

    Remittance:{
        type:Float32Array,
        required:true
    },

    EPF:{
        type:Float32Array,
        required:true
    },

    ETF:{
        type:Float32Array,
        required:true
    },

    Net_Salary:{
        type:Float32Array,
        required:true
    },

    
    Emp_Acc_id:{
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

module.exports = mongoose.model('PermanentEmployeeSalary' ,PermanentEmployeeSalarySchema )