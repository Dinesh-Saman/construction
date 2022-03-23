const express = require('express')
const router = express.Router()
const BankAccountSchema = require("../models/BankAccount")

router.get("/get-BankAccount" , async(req,res)=>{
    let BankAccount = BankAccountSchema.find({} , function(err , BankAccount){
        if(err){
            res.json({msg:err})
        }else{
            res.json({BankAccount})
        }
    })
})


module.exports = router;