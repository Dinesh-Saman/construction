const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({

    amount:{
        type:Float32Array,
        required:true
    },
    annual:{
        type:Float32Array,
        required:true
    },
    bonus:{
        type:Float32Array,
        required:true
    },
    OT:{
        type:Float32Array,
        required:true
    },
    gratuity:{
        type:Float32Array,
        required:true,
    },
    remittance:{
        type:Float32Array,
        required:true,
    },
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    }
})

module.exports=mongoose.model('salary',salarySchema)

