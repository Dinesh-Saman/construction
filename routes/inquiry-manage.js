const express = require('express')
const router = express.Router()
const InquirySchema  = require("../models/Vehicle_Inquiry")

router.get("/get-inquiries" , async(req,res)=>{
    let inquiries = InquirySchema.find({} , function(err , inquiries){
        if(err){
            res.json({msg:err})
        }else{
            res.json({inquiries})
        }
    })
})



module.exports = router;