const mongoose = require("mongoose");


const EquipmentSchema = new mongoose.Schema({


    equipment_id:{
        type:Date,
        required:true
    },
    eq_type:{
        type:String,
        required:true,
        
    },
    eq_model:{
        type:String,
        required:true,
        
    },
    eq_no:{
        type:Number,
        required:true,
    },

    manufacture_country:{
        type:String,
        required:true,
        unique:true
    },
    owner_name:{
        type:String,
        required:true,
    },
    owner_address:{
        type:Number,
        required:true
    },
    eq_weight:{
        type:Number,
        required:true
    },
    eq_purchase_date:{
        type:Number,
        required:true
    },
    eq_operator:{
        type:Number,
        require:true,
    },
    
})

module.exports = mongoose.model('Equipments' ,EquipmentSchema )