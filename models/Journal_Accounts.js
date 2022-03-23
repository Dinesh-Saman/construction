const mongoose = require("mongoose");

const JournalAccountsSchema = new mongoose.Schema({
    
    Acc_name:{
        type:String,
        required:true
    },
    Acc_Type:{
        type:String,
        required:true,
        unique:true
    },
    
    
})

module.exports = mongoose.model('JournalAccounts' ,JournalAccountsSchema )