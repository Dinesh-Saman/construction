const express = require('express')
const router = express.Router()
const AppointmentSchema = require("../models/Appointment")

router.get("/get-Appointment" , async(req,res)=>{
    let Appointment = AppointmentSchema.find({} , function(err , Appointment){
        if(err){
            res.json({msg:err})
        }else{
            res.json({Appointment})
        }
    })
})

router.post("/add-Appointment", async(req, res) => {
    // console.log(req.body)
    let cons_location = req.body.cons_location;
    let cons_type = req.body.cons_type;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let comments = req.body.comments;
    let client_id = req.body.client_id;

    let newAppointment = AppointmentSchema({
        cons_location:cons_location,
        cons_type:cons_type,
        start_date:start_date,
        end_date:end_date,
        comments:comments,
        client_id:client_id,
    })

    newAppointment.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })
    
    })

module.exports = router;