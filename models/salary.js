const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({

    amount:{
        type:Number,
        required:true
    },
    annual:{
        type:Number,
        required:true
    },
    bonus:{
        type:Number,
        required:true
    },
    OT:{
        type:Number,
        required:true
    },
    gratuity:{
        type:Number,
        required:true,
    },
    remittance:{
        type:Number,
        required:true,
    },
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    }
})

module.exports=mongoose.model('salary',salarySchema)

