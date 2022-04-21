const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    Date:{
        type:Date,
        required:true
    },
    Lstatus:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    emp_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    }
    
    
})

module.exports=mongoose.model('Leave',LeaveSchema)
