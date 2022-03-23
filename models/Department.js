const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({

    job_dept:{
        type:String,
        required:true
    },
    Dep_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary_rang:{
        type:String,
        required:true
    },
   
    
})
