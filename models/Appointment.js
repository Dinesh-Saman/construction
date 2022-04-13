const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({

    cons_location:{
        type:String,
        required:true
    },
    cons_type:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    client_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },

    
})

module.exports=mongoose.model('Appointment',AppointmentSchema)
