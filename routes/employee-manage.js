const express = require('express')
const router = express.Router()
const EmploeeSchema = require("../models/Employee")

router.get("/get-employees" , async(req,res)=>{
    let employees = EmploeeSchema.find({} , function(err , employees){
        if(err){
            res.json({msg:err})
        }else{
            res.json({employees})
        }
    })
})


module.exports = router;