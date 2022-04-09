const express = require('express')
const router = express.Router()
const ServiceSchema  = require("../models/Service")

router.get("/get-services" , async(req,res)=>{
    let services = ServiceSchema.find({} , function(err , services){
        if(err){
            res.json({msg:err})
        }else{
            res.json({services})
        }
    })
})



module.exports = router;