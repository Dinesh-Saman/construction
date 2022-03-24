const express = require('express')
const router = express.Router()
const salarySchema = require("../models/salary")

router.get("/get-salary" , async(req,res)=>{
    let salary = salarySchema.find({} , function(err , salary){
        if(err){
            res.json({msg:err})
        }else{
            res.json({salary})
        }
    })
})


module.exports = router;