const express = require('express')
const  mongoose = require('mongoose')
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
    var item=req.body.itm
    var issue=req.body.iss

    var itemID = mongoose.Types.ObjectId(item)
    var issueID = mongoose.Types.ObjectId(issue)

    var newRequest= new Project_issue_itemSchema({
        item:itemID,
        issue:issueID})
    newRequest.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"project item created"})
        }  
})
})
router.delete("/delete-project-issue-item/:id",async(req,res)=>{
    let project_issue_item_id = req.params.id;

    //console.log(driver_id)

    await ItemSchema.deleteOne({_id:project_issue_item_id})
    .then(()=>{
        res.status(200).send({
            status:"project-issue-item deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete project-issue-item",error :err.message});
    })
})


module.exports = router;