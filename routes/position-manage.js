const express = require('express')
const router = express.Router()
const PositionSchema = require("../models/Position")

router.get("/get-Position" , async(req,res)=>{
    let Position = PositionSchema.find({} , function(err , Position){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Position})
        }
    })
})

router.post("/add-Position" , async(req,res)=>{
    // console.log(req.body)  
    var position = req.body.position;
    var requirement = req.body.requirement;
    var Date_in = req.body.Date_in;
    var emp_id = req.body.emp_id; 
    
     
 
    var newPosition = new PositionSchema({
     position:position,
     requirement:requirement,
     Date_in:Date_in,
     emp_id:emp_id,
    
   
 })
 newPosition.save(function(err,result){
     if(err){
         res.json({msg:err})
     }else{
         res.json({msg:"Completed"})
     }
 })
 })

 router.put("/update-Position/:id" , async(req,res)=>{
    let Position_id = req.params.id;
 
    var position = req.body.position;
    var requirement = req.body.requirement;
    var Date_in = req.body.Date_in;
    var emp_id = req.body.emp_id;
  
 
    var newPosition = new PositionSchema({
        _id:Position_id,
        position:position,
        requirement:requirement,
        Date_in:Date_in,
        emp_id:emp_id,
        
      
    })
 
    PositionSchema.updateOne({ _id:Position_id},newPosition)
     .then(()=>{
         res.status(200).send({
             status:"Position updated"
         });
     }).catch((err)=>{
         console.log(err.message);
         res.status(500).send({status:"Error with updated Position",error :err.message});
     })
 
 })

 router.delete("/delete-Position/:id" , async(req,res)=>{
    let Position_id = req.params.id;

    //console.log(employee_id)

    await PositionSchema.deleteOne({_id:Position_id})
    .then(()=>{
        res.status(200).send({
            status:"employee deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete employee",error :err.message});
    })
})
 

module.exports = router;