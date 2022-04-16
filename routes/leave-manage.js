const express = require('express')
const router = express.Router()
const LeaveSchema = require("../models/Leave")

router.get("/get-Leave" , async(req,res)=>{
    let Leave = LeaveSchema.find({} , function(err , Leave){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Leave})
        }
    })
})
router.post("/add-Leave" , async(req,res)=>{
    // console.log(req.body)  
    var Date = req.body.Date;
    var Lstatus = req.body.Lstatus;
    var reason = req.body.reason;
    var emp_id = req.body.emp_id;
    var dept_id = req.body.dept_id; 
     
 
    var newLeave = new LeaveSchema({
     Date:Date,
     Lstatus:Lstatus,
     reason:reason,
     emp_id:emp_id,
     dept_id:dept_id,
   
 })
 newLeave.save(function(err,result){
     if(err){
         res.json({msg:err})
     }else{
         res.json({msg:"Completed"})
     }
 })
 })
 


module.exports = router;