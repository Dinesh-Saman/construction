const express = require('express')
const router = express.Router()
const AppointmentSchema = require("../models/Appointment")

router.get("/get-Appointment" , async(req,res)=>{
    let Appointment = AppointmentSchema.find({} , function(err , Appointment){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Appointment})
        }
    })
})


module.exports = router;