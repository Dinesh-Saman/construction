const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema({

    bank_account_no:{
        type:Int32Array,
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
