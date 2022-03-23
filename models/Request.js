const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({

    item_id:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required:true,
    },
    
   
    quantity:{
        type:Number,
        required:true,
        unique:true
    },
    Date:{
        type:Number,
        required:true
    },
    
   
})
module.exports = mongoose.model("Request" , RequestSchema)