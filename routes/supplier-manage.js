const express = require('express')
const router = express.Router()
const SupplierSchema = require("../models/Supplier")


router.get("/get-suppliers" , async(req,res)=>{
    let suppliers = SupplierSchema.find({} , function(err , suppliers){
        if(err){
            res.json({msg:err})
        }else{
            res.json({suppliers})
        }
    })
})


module.exports = router;
