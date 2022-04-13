const express = require('express')
const  mongoose = require('mongoose')
const router = express.Router()
const Project_issueSchema = require("../models/Project_issue")

router.get("/get-project-issues" , async(req,res)=>{
    let project_issues = Project_issueSchema.find({} , function(err ,project_issues ){
        if(err){
            res.json({msg:err})
        }else{
            res.json({project_issues})
        }
    })
})

router.post("/add-project_issue" , async(req,res)=>{
    var issuename=req.body.issname
    var issuecategory=req.body.isscate
    var issuequantity=req.body.issquan
    var receivestatus=req.body.recsts
    var receivedate=req.body.recdte
    var projid=req.body.proid

    var proId = mongoose.Types.ObjectId(projid)
    
    var newRequest= new Project_issueSchema({
        issue_name:issuename,
        issue_category:issuecategory,
        issue_quantity:issuequantity,
        receive_status:receivestatus,
        receive_date: receivedate,
        proj_id:proId})
    newRequest.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"projrect issue created"})
        }  
})   
})
router.delete("/delete-project-issue/:id",async(req,res)=>{
    let project_issue_id = req.params.id;

    //console.log(driver_id)

    await ItemSchema.deleteOne({_id:project_issue_id})
    .then(()=>{
        res.status(200).send({
            status:"project-issue deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete project-issue",error :err.message});
    })
})

module.exports = router;