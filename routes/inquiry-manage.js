const express = require('express')
const router = express.Router()
const InquirySchema  = require("../models/Vehicle_Inquiry")

router.get("/get-inquiries" , async(req,res)=>{
    let inquiries = InquirySchema.find({} , function(err , inquiries){
        if(err){
            res.json({msg:err})
        }else{
            res.json({inquiries})
        }
    })
})

router.route("/add-inquiry").post((req,res)=>{
    const inquiry_name = req.body.inquiry_name;
    const inquiry_date = req.body.inquiry_date;
    const veh_type = req.body.veh_type;
    const veh_make = req.body.veh_make;
    const veh_model = req.body.veh_model;
    const problem_description = req.body.problem_description;
    const status = req.body.status;

const newRoute = new InquirySchema({

    inquiry_name,
    inquiry_date,
    veh_type,
    veh_make,
    veh_model,
    problem_description,
    status,
    
})

newRoute.save().then(()=>{
    res.json("Inquirie Added")
}).catch((err)=>{
    console.log(err);
})
})

router.route("/update-inquiry/:id").put(async (req, res) => {
    let inquiry_id = req.params.id;
    const {
        fuel_lastdate,
        fuel_type,
        veh_no,
        veh_year,
        veh_make,
        veh_model,
        quentity,
        amount,
        old_reading,
        new_reading,
        usage,
        dri_name,
        total_capacity,
        fuel_cost,
    } = req.body;

    const updateInquiry = {
        fuel_lastdate,
        fuel_type,
        veh_no,
        veh_year,
        veh_make,
        veh_model,
        quentity,
        amount,
        old_reading,
        new_reading,
        usage,
        dri_name,
        total_capacity,
        fuel_cost,
    }

    const update = await InquirySchema.findByIdAndUpdate(inquiry_id ,updateInquiry)
    .then(()=>{
        res.status(200).send({status:"Inquiry updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

module.exports = router;