const express = require('express')
const router = express.Router()
const payrollSchema = require("../models/payroll")

router.get("/get-payroll" , async(req,res)=>{
    let payroll = payrollSchema.find({} , function(err , payroll){
        if(err){
            res.json({msg:err})
        }else{
            res.json({payroll})
        }
    })
})

router.post("/add-payroll" , async(req,res)=>{
    //   console.log(req.body)
    var report = req.body.report;
    var Total_amount = req.body.Total_amount;
    var Date = req.body.Date;
    var emp_id = req.body.emp_id;
    var salary_id = req.body.salary_id;
    var Leave_id = req.body.Leave_id;
    var dept_id = req.body.dept_id;
    
    
    var newpayroll = new payrollSchema({
        report:report,
        Total_amount:Total_amount,
        Date:Date,
        emp_id:emp_id,
        salary_id:salary_id,
        Leave_id:Leave_id,
        dept_id:dept_id,
        
    
    })
    
    newpayroll.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })
    
    })


module.exports = router;