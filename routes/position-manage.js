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


module.exports = router;