const mongoose = require("mongoose");


const EquipmentSchema = new mongoose.Schema({

    eq_type:{
        type:String,
        required:true,
        
    },
    eq_model:{
        type:String,
        required:true,
        
    },
    eq_no:{
        type:String,
        required:true,
    },

    manufacture_country:{
        type:String,
        required:true,
    },
    owner_name:{
        type:String,
        required:true,
    },
    owner_address:{
        type:String,
        required:true
    },
    eq_weight:{
        type:Number,
        required:true
    },
    eq_purchase_date:{
        type:Date,
        required:true
    },
    eq_operator:{
        type:String,
        require:true,
    },
    
})

module.exports = mongoose.model('Equipments' ,EquipmentSchema )