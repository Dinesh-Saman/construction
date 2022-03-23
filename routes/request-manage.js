const express = require('express')
const router = express.Router()
const RequestSchema = require("../models/Request")

router.get("/get-requests" , async(req,res)=>{
    let requests = RequestSchema.find({} , function(err , requests){
        if(err){
            res.json({msg:err})
        }else{
            res.json({requests})
        }
    })
})

router.post("/add-Request" , async(req,res)=>{
    
})


module.exports = router;