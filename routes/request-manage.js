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



module.exports = router;