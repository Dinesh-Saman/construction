const express = require('express')
const router = express.Router()
const LeaveSchema = require("../models/Leave")

router.get("/get-Leave" , async(req,res)=>{
    let Leave = LeaveSchema.find({} , function(err , Leave){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Leave})
        }
    })
})


module.exports = router;