const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    role:{
        type:String,    
        enum:["EngineerManager" , "FinanceManager" , "HRManager" , "InventoryManager" , "ProjectManager" , "SalesAndMarketingManager" , "SupplierAndPurchaseManager" , "TransportManager"]

    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
} , {timestamps:true})

module.exports = new mongoose.model("Auth" , AuthSchema)