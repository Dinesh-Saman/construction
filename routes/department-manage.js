const express = require('express')
const router = express.Router()
const DepartmentSchema = require("../models/Department")

router.get("/get-attandance" , async(req,res)=>{
    let Department = DepartmentSchema.find({} , function(err , Department){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Department})
        }
    })
})


module.exports = router;