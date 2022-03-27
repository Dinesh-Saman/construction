const express = require('express')
const router = express.Router()
const EngineerSchema = require("../models/Engineer")

router.get("/get-engineers" , async(req,res)=>{
    let engineers = EngineerSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({engineers})
        }
    })
})

module.exports = router;