const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({

    emp_name:{
        type:String,
        required:true
    },
    emp_phone_no:{
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
        default:Date.now(),
        require:true,
    },
    emp_cv:{
        type:String,
        required:true,
    },
    emp_type:{
        type:String,
        enum:["PERMANENT","TEMPORARY"],
        required:true
    },
    dept_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department"
    },
    emp_account_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BankAccount"
    },
    
    
})

module.exports=mongoose.model('Employee',EmployeeSchema)
