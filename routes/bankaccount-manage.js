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

   router.put("/update-BankAccount/:id" , async(req,res)=>{

    // // console.log(req.body)
    let BankAccount_id = req.params.id;

    var bank_account_no = req.body.bank_account_no;
    var bank_name = req.body.bank_name;
    var branch_name = req.body.branch_name;
    var account_holder_name = req.body.account_holder_name;

    var newBankAccount = new BankAccountSchema({
        _id:BankAccount_id,
        bank_account_no:bank_account_no,
        bank_name:bank_name,
        branch_name:branch_name,
        account_holder_name:account_holder_name,
    })

    BankAccountSchema.updateOne({_id:BankAccount_id},newBankAccount)
    .then(()=>{
        res.status(200).send({
            status:"BankAccount updated"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated BankAccount",error :err.message});
    })
}) 


router.delete("/delete-BankAccount/:id" , async(req,res)=>{
    let BankAccount_id = req.params.id;

    //console.log(attandance_id)

    await BankAccountSchema.deleteOne({_id:BankAccount_id})
    .then(()=>{
        res.status(200).send({
            status:"BankAccount deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete BankAccount",error :err.message});
    })
})



module.exports = router;