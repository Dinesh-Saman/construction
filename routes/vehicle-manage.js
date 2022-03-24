const express = require('express')
const router = express.Router()
const VehicleSchema  = require("../models/Vehicle")

router.get("/get-vehicles" , async(req,res)=>{
    let vehicles = VehicleSchema.find({} , function(err , vehicles){
        if(err){
            res.json({msg:err})
        }else{
            res.json({vehicles})
        }
    })
})



module.exports = router;