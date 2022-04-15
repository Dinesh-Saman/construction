const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const PurchaseSchema = require("../models/Purchase")


router.get("/get-purchases" , async(req,res)=>{
    let purchases = PurchaseSchema.find({} , function(err , purchases){
        if(err){
            res.json({msg:err})
        }else{
            res.json({purchases})
        }
    })
})

router.post("/add-purchases" , async(req,res)=>{
    // console.log(req.body)
    var invoice_date = req.body.invoice_date;
    var unit_price = req.body.unit_price;
    var quantity = req.body.quantity;
    var total_amount = req.body.total_amount;
    var supplier_id = req.body.supplier_id;
    var item_id = req.body.item_id;

    var supplier_id = mongoose.Types.ObjectId(supplier_id)
    var item_id = mongoose.Types.ObjectId(item_id)

    var newPurchase = new PurchaseSchema({
        invoice_date:invoice_date,
        unit_price:unit_price,
        quantity:quantity,
        total_amount:total_amount,
        supplier_id:supplier_id,
        item_id:item_id,

    })
    newPurchase.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Purchase Created!"})
        }
    })

})

router.delete("/delete-purchases/:id" , async(req,res)=>{
    let invoice_no = req.params.id;

    //console.log(invoice_no)

    await PurchaseSchema.deleteOne({_id:invoice_no})
    .then(()=>{
        res.status(200).send({
            status:"purchase deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete purchase",error :err.message});
    })
})

router.put("/update-purchases" , async(req,res)=>{
    // console.log(req.body)
    let invoice_no = req.params.id;

    var invoice_date = req.body.invoice_date;
    var unit_price = req.body.unit_price;
    var quantity = req.body.quantity;
    var total_amount = req.body.total_amount;
    var supplier_id = req.body.supplier_id;
    var item_id = req.body.item_id;

    var supplier_id = mongoose.Types.ObjectId(supplier_id)
    var item_id = mongoose.Types.ObjectId(item_id)

    var newPurchase = new PurchaseSchema({
        invoice_date:invoice_date,
        unit_price:unit_price,
        quantity:quantity,
        total_amount:total_amount,
        supplier_id:supplier_id,
        item_id:item_id,

    })

    PurchaseSchema.updateOne({_id:invoice_no},newPurchase)
    .then(()=>{
        res.status(200).send({
            status:"purchase updated"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated purchase",error :err.message});
    })

})

module.exports = router;