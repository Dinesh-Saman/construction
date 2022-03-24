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
    var itemname=req.body.itmname
    var ItemCategory=req.body.itmcat
    var quantity=req.body.itmquant
    var reorder_level=req.body.itmreorder
    var  sup_id=req.body.itmsup
    var  invoice_no=req.body.itminvoice

    var newItem= new ItemSchema({item_name:itemname,category_name:ItemCategory,quantity:quantity,reorder_level:reorder_level,sup_id:sup_id ,invoice_no:invoice_no})
    newItem.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"item  created"})
        }   
})

})

module.exports = router;