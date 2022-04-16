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
 

module.exports = router;