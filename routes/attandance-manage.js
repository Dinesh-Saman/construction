const express = require('express')
const router = express.Router()
const attandanceSchema = require("../models/Attandance")

router.get("/get-attandance" , async(req,res)=>{
    let attandance = attandanceSchema.find({} , function(err , attandance){
        if(err){
            res.json({msg:err})
        }else{
            res.json({attandance})
        }
    })
})


module.exports = router;