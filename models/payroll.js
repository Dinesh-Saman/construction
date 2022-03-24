const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({

    report:{
        type:String,
        required:true
    },
    Total_amount:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    emp_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },
    salary_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"salary"
    },
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    },
    
    Leave_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Leave"
    },

    
})

module.exports=mongoose.model('payroll',payrollSchema)