const mongoose = require("mongoose");

const AttandanceSchema = new mongoose.Schema({

    Total_labor:{
        type:Number,
        required:true
    },
    salary:{
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
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    },
    duty_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Duty_Duration"
    },
    Leave_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Leave"
    },

    
})

module.exports=mongoose.model('Attandance',AttandanceSchema)
