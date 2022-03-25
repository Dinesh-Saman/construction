const express = require('express')
const router = express.Router()
const DriverSchema  = require("../models/Driver")

router.get("/get-drivers" , async(req,res)=>{
    let drivers = DriverSchema.find({} , function(err , drivers){
        if(err){
            res.json({msg:err})
        }else{
            res.json({drivers})
        }
    })
})



module.exports = router;