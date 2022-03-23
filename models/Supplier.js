
const mongoose = require("mongoose");
const SupplierSchema = new mongoose.Schema({
    

    supplier_name:{
        type:String,
        required:true
    },
    contact_name:{
        type:String,
        required:true,
    },

    supplier_nic:{
        type:String,
        required:true,
        unique:true
    },

    supplier_address:{
        type:String,
        required:true,
    },

    supplier_phone:{
        type:String,
        required:true,
        unique:true
    },

    supplier_email:{
        type:String,
        required:true,
        unique:true
    },
      
    
})

module.exports=mongoose.model("Supplier",SupplierSchema)
