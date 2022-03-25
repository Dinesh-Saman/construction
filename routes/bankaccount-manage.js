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

router.post("/add-BankAccount" , async(req,res)=>{
    //console.log(req.body)  
    var bank_account_no = req.body.bank_account_no;
    var bank_name = req.body.bank_name;
    var branch_name = req.body.branch_name;
    var account_holder_name = req.body.account_holder_name;

    var newBankAccount = new BankAccountSchema({
        bank_account_no:bank_account_no,
        bank_name:bank_name,
        branch_name:branch_name,
        account_holder_name:account_holder_name,
      
    })
    
    newBankAccount.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })
    
   })


module.exports = router;