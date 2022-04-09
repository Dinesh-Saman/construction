const express = require('express')
const router = express.Router()
const RouteSchema  = require("../models/Route")

router.get("/get-routes" , async(req,res)=>{
    let routes = RouteSchema.find({} , function(err , routes){
        if(err){
            res.json({msg:err})
        }else{
            res.json({routes})
        }
    })
})



module.exports = router;