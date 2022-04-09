const express = require('express')
const router = express.Router()
const InspectionSchema  = require("../models/Vehicle_Inspection")

router.get("/get-inspections" , async(req,res)=>{
    let inspections = InspectionSchema.find({} , function(err , inspections){
        if(err){
            res.json({msg:err})
        }else{
            res.json({inspections})
        }
    })
})



module.exports = router;