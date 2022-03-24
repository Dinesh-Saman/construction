const express = require('express')
const req = require('express/lib/request')
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

module.exports = router;
