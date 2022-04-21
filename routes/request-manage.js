const express = require('express')
const router = express.Router()
const RequestSchema = require("../models/Request")

router.get("/get-requests" , async(req,res)=>{
    let requests = RequestSchema.find({} , function(err , requests){
        if(err){
            res.json({msg:err})
        }else{
            res.json({requests})
        }
    })
})

router.post("/add-request" , async(req,res)=>{
    var itemid=req.body.reqitemid
    var reqquantity=req.body.reqquant
    var date=req.body.dte

    var itemId = mongoose.Types.ObjectId(itemid)
    
    var newRequest= new RequestSchema({
        item_id:itemId,
        quantity:reqquantity,
        Date:date})
    newRequest.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"request created"})
        }  
})

})   
router.delete("/delete-request/:id",async(req,res)=>{
    let request_id = req.params.id;

    //console.log(driver_id)

    await RequestSchema.deleteOne({_id:request_id})
    .then(()=>{
        res.status(200).send({
            status:"request deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete request",error :err.message});
    })
})
router.put("/update-request/:id" , async(req,res)=>{
    let request_id = req.params.id;
    var itemid=req.body.reqitemid
    var reqquantity=req.body.reqquant
    var date=req.body.dte

    var itemId = mongoose.Types.ObjectId(itemid)
    var newRequest= new RequestSchema({
        _id:request_id,
        item_id:itemId,
        quantity:reqquantity,
        Date:date})
        RequestSchema.updateOne({_id:request_id},newRequest)
    .then(()=>{
        res.status(200).send({
            status:"request update"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated request",error :err.message});
    })
})



module.exports = router;