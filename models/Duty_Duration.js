const mongoose = require("mongoose");

const Duty_DurationSchema = new mongoose.Schema({

    duration:{
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
    }
    
})

module.exports=mongoose.model('Duty_Duration',Duty_DurationSchema)