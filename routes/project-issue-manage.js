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
    
})


module.exports = router;