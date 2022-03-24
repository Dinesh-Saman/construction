const express = require('express')
const router = express.Router()
const ItemSchema = require("../models/Item")

router.get("/get-items" , async(req,res)=>{
    let items = ItemSchema.find({} , function(err , items){
        if(err){
            res.json({msg:err})
        }else{
            res.json({items})
        }
    })
})

router.post("/add-item" , async(req,res)=>{
console.log(req.body)    
})


module.exports = router;