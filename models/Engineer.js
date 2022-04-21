const mongoose = require("mongoose");

const EngineerSchema = new mongoose.Schema({
    emp_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },
    status:{
        type:String,
        enum:["ONGOING" , "FINISHED"]
    },
    description:{
        type:String,
    },
    project_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
    
})

module.exports = mongoose.model("Engineer" , EngineerSchema)