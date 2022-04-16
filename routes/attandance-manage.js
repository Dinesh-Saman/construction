const express = require('express')
const router = express.Router()
const attandanceSchema = require("../models/Attandance")

router.get("/get-attandance" , async(req,res)=>{
    let attandance = attandanceSchema.find({} , function(err , attandance){
        if(err){
            res.json({msg:err})
        }else{
            res.json({attandance})
        }
    })
})

router.post("/add-attandance" , async(req,res)=>{
    //   console.log(req.body)
    var Total_labor = req.body.Total_labor;
    var salary = req.body.salary;
    var Date = req.body.Date;
    var emp_id = req.body.emp_id;
    var duty_id = req.body.duty_id;
    var Leave_id = req.body.Leave_id;
    var dept_id = req.body.dept_id;
    
    
    var newattandance = new attandanceSchema({
        Total_labor:Total_labor,
        salary:salary,
        Date:Date,
        emp_id:emp_id,
        duty_id:duty_id,
        Leave_id:Leave_id,
        dept_id:dept_id,
        
    
    })
    
    newattandance.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })
    
    })
    


module.exports = router;