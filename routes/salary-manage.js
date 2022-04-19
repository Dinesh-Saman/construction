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

    router.put("/update-salary/:id" , async(req,res)=>{
        let salary_id = req.params.id;
     
        var amount = req.body.amount;
        var annual = req.body.annual;
        var bonus = req.body.bonus;
        var OT = req.body.OT;
        var gratuity = req.body.gratuity;
        var remittance = req.body.remittance;
        var dept_id = req.body.dept_id;
     
        var newsalary = new salarySchema({
            _id:salary_id,
            amount:amount,
            annual:annual,
            bonus:bonus,
            OT:OT,
            gratuity:gratuity,
            remittance:remittance,
            dept_id:dept_id,
          
        })
     
        salarySchema.updateOne({ _id:salary_id},newsalary)
         .then(()=>{
             res.status(200).send({
                 status:"salary updated"
             });
         }).catch((err)=>{
             console.log(err.message);
             res.status(500).send({status:"Error with updated salary",error :err.message});
         })
     
     })

     router.delete("/delete-salary/:id" , async(req,res)=>{
        let salary_id = req.params.id;
    
        //console.log(employee_id)
    
        await salarySchema.deleteOne({_id:salary_id})
        .then(()=>{
            res.status(200).send({
                status:"salary deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete salary",error :err.message});
        })
    })
    


module.exports = router;