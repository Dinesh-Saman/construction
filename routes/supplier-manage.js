const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const SupplierSchema = require("../models/Supplier")


router.get("/get-suppliers" , async(req,res)=>{
    let suppliers = SupplierSchema.find({} , function(err , suppliers){
        if(err){
            res.json({msg:err})
        }else{
            res.json({suppliers})
        }
    })
})



router.post("/add-suppliers" , async(req,res)=>{
    // // console.log(req.body)
    var supplier_name = req.body.supplier_name;
    var contact_name = req.body.contact_name;
    var nic = req.body.nic;
    var supplier_address = req.body.supplier_address;
    var phone_no = req.body.phone_no;
    var email = req.body.email;

    var newSupplier = new SupplierSchema({
        supplier_name:supplier_name,
        contact_name:contact_name,
        supplier_nic:nic,
        supplier_address:supplier_address,
        supplier_phone:phone_no,
        supplier_email:email,

     
    })
    newSupplier.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Supplier Created!"})
        }
    })
 
})

router.delete("/delete-suppliers/:id" , async(req,res)=>{
    let supplier_id = req.params.id;

    //console.log(supplier_id)

    await SupplierSchema.deleteOne({_id:supplier_id})
    .then(()=>{
        res.status(200).send({
            status:"supplier deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete supplier",error :err.message});
    })
})

router.put("/update-suppliers/:id" , async(req,res)=>{

    // // console.log(req.body)
    let supplier_id = req.params.id;

    var supplier_name = req.body.supplier_name;
    var contact_name = req.body.contact_name;
    var nic = req.body.nic;
    var supplier_address = req.body.supplier_address;
    var phone_no = req.body.phone_no;
    var email = req.body.email;

    var newSupplier = new SupplierSchema({
        _id:supplier_id,
        supplier_name:supplier_name,
        contact_name:contact_name,
        supplier_nic:nic,
        supplier_address:supplier_address,
        supplier_phone:phone_no,
        supplier_email:email,
    })

    SupplierSchema.updateOne({_id:supplier_id},newSupplier)
    .then(()=>{
        res.status(200).send({
            status:"supplier updated"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated supplier",error :err.message});
    })
})




module.exports = router;
