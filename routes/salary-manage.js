const express = require('express')
const router = express.Router()
const salarySchema = require("../models/salary")

router.get("/get-salary" , async(req,res)=>{
    let salary = salarySchema.find({} , function(err , salary){
        if(err){
            res.json({msg:err})
        }else{
            res.json({salary})
        }
    })
})

router.post("/add-salary" , async(req,res)=>{
    //   console.log(req.body)
    var amount = req.body.amount;
    var annual = req.body.annual;
    var bonus = req.body.bonus;
    var OT = req.body.OT;
    var gratuity = req.body.gratuity;
    var remittance = req.body.remittance;
    var dept_id = req.body.dept_id;
    
    var newsalary = new salarySchema({
        amount:amount,
        annual:annual,
        bonus:bonus,
        OT:OT,
        gratuity:gratuity,
        remittance:remittance,
        dept_id:dept_id,
       
    })
    
    newsalary.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })
    
    })
    


module.exports = router;