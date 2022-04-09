const express = require('express')
const router = express.Router()
const ConsignmentSchema  = require("../models/Consignment")

router.get("/get-consignments" , async(req,res)=>{
    let consignments = ConsignmentSchema.find({} , function(err , consignments){
        if(err){
            res.json({msg:err})
        }else{
            res.json({consignments})
        }
    })
})



module.exports = router;