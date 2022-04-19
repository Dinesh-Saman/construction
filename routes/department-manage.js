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

router.put("/update-Department/:id" , async(req,res)=>{
   let Department_id = req.params.id;

   var job_dept = req.body.job_dept;
   var Dep_name = req.body.Dep_name;
   var description = req.body.description;
   var salary_rang = req.body.salary_rang;

    var newDepartment = new DepartmentSchema({
        _id:Department_id,
        job_dept:job_dept,
        Dep_name:Dep_name,
        description:description,
        salary_rang:salary_rang,
    
    })

    DepartmentSchema.updateOne({ _id:Department_id},newDepartment)
    .then(()=>{
        res.status(200).send({
            status:"Department updated"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated Department",error :err.message});
    })

})

router.delete("/delete-Department/:id" , async(req,res)=>{
    let Department_id = req.params.id;

    //console.log(Department_id)

    await DepartmentSchema.deleteOne({_id:Department_id})
    .then(()=>{
        res.status(200).send({
            status:"Department deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Department",error :err.message});
    })
})




module.exports = router;