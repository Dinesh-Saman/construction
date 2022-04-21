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
var categoryname=req.body.catname
var newCategory= new CategorySchema({category_name:categoryname})
newCategory.save(function(err,result){
    if(err){
        res.json({msg:err})
    }else{
        res.json({mag:"category created"})
    }
})

})

module.exports = router;