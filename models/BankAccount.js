const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema({

    bank_account_no:{
        type:Number,
        unique:true,
        required:true
    },
    bank_name:{
        type:String,
        required:true
    },
    branch_name:{
        type:String,
        required:true
    },
    account_holder_name:{
        type:String,
        required:true
    },
 
})

module.exports=mongoose.model('BankAccount',BankAccountSchema)
