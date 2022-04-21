const mongoose = require("mongoose");
const Project_issue_itemSchema = new mongoose.Schema({
    
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required:"true"
    },
    issue:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project_issue",
        required:"true"
    },
   
})

module.exports = mongoose.model("Project_issue_item" , Project_issue_itemSchema)