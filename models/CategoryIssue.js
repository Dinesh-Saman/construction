const mongoose = require("mongoose");

const CategoryissueSchema = new mongoose.Schema({
    
    category_issue_name:{
        type:String,
        required:true
    }
   
})


module.exports = mongoose.model("Categoryissue" , CategoryissueSchema )