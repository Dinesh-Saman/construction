const express = require('express')
const router = express.Router()
const DepartmentSchema = require("../models/Department")

router.get("/get-Department" , async(req,res)=>{
    let Department = DepartmentSchema.find({} , function(err , Department){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Department})
        }
    })
})

router.post("/add-Department" , async(req,res)=>{
   // console.log(req.body)  
   var job_dept = req.body.job_dept;
   var Dep_name = req.body.Dep_name;
   var description = req.body.description;
   var salary_rang = req.body.salary_rang; 
    

   var newDepartment = new DepartmentSchema({
    job_dept:job_dept,
    Dep_name:Dep_name,
    description:description,
    salary_rang:salary_rang,
  
})
newDepartment.save(function(err,result){
    if(err){
        res.json({msg:err})
    }else{
        res.json({msg:"Completed"})
    }
})
})



module.exports = router;