const express = require('express')
const router = express.Router()
const CategorySchema = require("../models/Category")

router.get("/get-category" , async(req,res)=>{
    let category = CategorySchema.find({} , function(err ,category ){
        if(err){
            res.json({msg:err})
        }else{
            res.json({category})
        }
    })
})

router.post("/add-category" , async(req,res)=>{
console.log(req.body)
})

module.exports = router;