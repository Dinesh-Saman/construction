const express = require('express')
const router = express.Router()
const payrollSchema = require("../models/payroll")

router.get("/get-payroll" , async(req,res)=>{
    let payroll = payrollSchema.find({} , function(err , payroll){
        if(err){
            res.json({msg:err})
        }else{
            res.json({payroll})
        }
    })
})


module.exports = router;