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
 
    
})
