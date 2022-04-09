const express = require('express')
const router = express.Router()
const FuelSchema  = require("../models/Fuel")

router.get("/get-fuels" , async(req,res)=>{
    let fuels = FuelSchema.find({} , function(err , fuels){
        if(err){
            res.json({msg:err})
        }else{
            res.json({fuels})
        }
    })
})



module.exports = router;