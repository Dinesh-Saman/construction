const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
   

    position:{
        type:String,
        required:true
    },
    requirement:{
        type:String,
        required:true   
    },
    Date_in :{
        type:Date,
        required:true
    },
    emp_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },
    
 
    
})

module.exports=mongoose.model('Position',PositionSchema)
