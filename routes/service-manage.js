const express = require('express')
const router = express.Router()
const ServiceSchema  = require("../models/Service")

router.get("/get-services" , async(req,res)=>{
    let services = ServiceSchema.find({} , function(err , services){
        if(err){
            res.json({msg:err})
        }else{
            res.json({services})
        }
    })
})

router.route("/add-service").post((req,res)=>{
    const service_start_date = req.body.service_start_date;
    const last_service_date = req.body.last_service_date;
    const next_service_date = req.body.next_service_date;
    const service_period = req.body.service_period;
    const veh_no= req.body.veh_no;
    const veh_type = req.body.veh_type;
    const veh_make = req.body.veh_make;
    const veh_model = req.body.veh_model;
    const service_cost = req.body.service_cost;
    const veh_owner = req.body.veh_owner;
 
    const newRoute = new ServiceSchema({

        service_start_date,
        last_service_date,
        next_service_date,
        service_period,
        veh_no,
        veh_type,
        veh_make,
        veh_model,
        service_cost,
        veh_owner,
    })

    newRoute.save().then(()=>{
        res.json("Service Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update-service/:id").put(async (req, res) => {
    let service_id = req.params.id;
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

    const updateService = {
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

    const update = await ServiceSchema.findByIdAndUpdate(service_id ,updateService)
    .then(()=>{
        res.status(200).send({status:"Service updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )



module.exports = router;