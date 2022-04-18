const express = require('express')
const router = express.Router()
const Duty_DurationSchema = require("../models/Duty_Duration")

router.get("/get-Duty_Duration" , async(req,res)=>{
    let Duty_Duration = Duty_DurationSchema.find({} , function(err , Duty_Duration){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Duty_Duration})
        }
    })
})

router.post("/add-Duty_Duration" , async(req,res)=>{
    // console.log(req.body)  
    var duration = req.body.duration;
    var Date = req.body.Date;
    var emp_id = req.body.emp_id;
    var dept_id = req.body.dept_id; 
     
 
    var newDuty_Duration = new Duty_DurationSchema({
     duration:duration,
     Date:Date,
     emp_id:emp_id,
     dept_id:dept_id,
   
 })
 newDuty_Duration.save(function(err,result){
     if(err){
         res.json({msg:err})
     }else{
         res.json({msg:"Completed"})
     }
 })
 })
 
 router.put("/update-Duty_Duration/:id" , async(req,res)=>{
    let Duty_Duration_id = req.params.id;
 
    var duration = req.body.duration;
    var Date = req.body.Date;
    var emp_id = req.body.emp_id;
    var dept_id = req.body.dept_id; 
 
    var newDuty_Duration = new Duty_DurationSchema({
        _id:Duty_Duration_id,
        duration:duration,
        Date:Date,
        emp_id:emp_id,
        dept_id:dept_id,
      
    })
 
    Duty_DurationSchema.updateOne({ _id:Duty_Duration_id},newDuty_Duration)
     .then(()=>{
         res.status(200).send({
             status:"Duty_Duration updated"
         });
     }).catch((err)=>{
         console.log(err.message);
         res.status(500).send({status:"Error with updated Duty_Duration",error :err.message});
     })
 
 })

 router.delete("/delete-Duty_Duration/:id" , async(req,res)=>{
    let Duty_Duration_id = req.params.id;

    //console.log(employee_id)

    await Duty_DurationSchema.deleteOne({_id:Duty_Duration_id})
    .then(()=>{
        res.status(200).send({
            status:"Duty_Duration deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Duty_Duration",error :err.message});
    })
})


module.exports = router;