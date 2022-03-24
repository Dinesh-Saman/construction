const express = require('express')
const router = express.Router()
const PurchaseSchema = require("../models/Purchase")


router.get("/get-purchase" , async(req,res)=>{
    let purchases = PurchaseSchema.find({} , function(err , purchases){
        if(err){
            res.json({msg:err})
        }else{
            res.json({purchases})
        }
    })
})


module.exports = router;