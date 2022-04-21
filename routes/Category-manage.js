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
router.delete("/delete-category/:id",async(req,res)=>{
    let category_id = req.params.id;

    //console.log(driver_id)

    await CategorySchema.deleteOne({_id:category_id})
    .then(()=>{
        res.status(200).send({
            status:"category deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete category",error :err.message});
    })
})
router.put("/update-category/:id" , async(req,res)=>{
    let category_id = req.params.id;
    var categoryname=req.body.catname

    var newRequest= new CategorySchema({
        _id:category_id,
        })
        CategorySchema.updateOne({_id:category_id_id},newRequest)
    .then(()=>{
        res.status(200).send({
            status:"category update"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated category",error :err.message});
    })
})

module.exports = router;