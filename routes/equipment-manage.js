const express = require('express')
const router = express.Router()
const EquipmentSchema  = require("../models/Equipment")

router.get("/get-equipments" , async(req,res)=>{
    let equipments = EquipmentSchema.find({} , function(err , equipments){
        if(err){
            res.json({msg:err})
        }else{
            res.json({equipments})
        }
    })
})



module.exports = router;