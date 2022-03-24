const express = require('express')
const router = express.Router()
const Project_issue_itemSchema = require("../models/Project_issue_item")

router.get("/get-project-issue-items" , async(req,res)=>{
    let project_issue_items = Project_issue_itemSchema.find({} , function(err ,project_issue_items ){
        if(err){
            res.json({msg:err})
        }else{
            res.json({project_issue_items})
        }
    })
})

router.post("/add-project_issue_items" , async(req,res)=>{
    
})


module.exports = router;