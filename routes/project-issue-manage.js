const express = require('express')
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
    var newRequest= new Project_issueSchema({issue_name:issuename,issue_category:issuecategory,issue_quantity:issuequantity,receive_status:receivestatus,receive_date: receivedate,proj_id:projid})
    newRequest.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"projrect issue created"})
        }  
})   
})


module.exports = router;