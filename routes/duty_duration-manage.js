const express = require('express')
const router = express.Router()
const Duty_DurationSchema = require("../models/Duty_Duration")

router.get("/get-Duty_Duration" , async(req,res)=>{
    let Duty_Duration = Duty_DurationSchema.find({} , function(err , Duty_Duration){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Duty_Duration})
        }
    })
})


module.exports = router;