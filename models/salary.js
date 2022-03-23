const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({

    amount:{
        type:Float32Array,
        required:true
    },
    annual:{
        type:String,
        required:true,
        unique:true
    },
    emp_email:{
        type:String,
        required:true,
        unique:true
    },
    emp_photo:{
        type:String,
        required:true
    },
    emp_address:{
        type:String,
        required:true,
    },
    emp_dob:{
        type:Date,
        required:true,
    },
    emp_gender:{
        type:String,
        enum:["MALE" , "FEMALE"],
    },
    emp_nic:{
        type:String,
        unique:true,
        required:true
    },
    emp_epf_no:{
        type:String,
        unique:true,
        required:true
    },
    emp_join_date:{
        type:Date,
        require:true,
    },
    emp_cv:{
        type:String,
        required:true,
    },
    emp_type:{
        type:String,
        enum:["PERMANENT"],
        required:true
    },
    
    
})
