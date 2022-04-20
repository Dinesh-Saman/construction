const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const VehicleSchema  = require("../models/Vehicle")

router.get("/get-vehicles" , async(req,res)=>{
    let vehicles = VehicleSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({result})
        }
    })
})

router.post("/add-vehicle" , async(req,res)=>{
    var veh_type = req.body.veh_type  
    var veh_make =req.body.veh_make 
    var veh_model=req.body.veh_model
    var veh_year=req.body.veh_year  
    var veh_no=req.body.veh_no  
    var owner_name=req.body.owner_name
    var purchased_date=req.body.purchased_date
    var registered_date=req.body.registered_date
    var engine_no=req.body.engine_no
    var chassi_no=req.body.chassi_no
    var insurance_date=req.body.insurance_date
    var vehicle_weight=req.body.vehicle_weight
    var manufacture_country=req.body.manufacture_country


    var newVehicle= new VehicleSchema({
        veh_type: veh_type, 
        veh_make: veh_make, 
        veh_model: veh_model,
        veh_year :veh_year,  
        veh_no :veh_no, 
        owner_name :owner_name,
        purchased_date: purchased_date,
        registered_date: registered_date,
        engine_no :engine_no,
        chassi_no :chassi_no,
        insurance_date: insurance_date,
        vehicle_weight :vehicle_weight,
        manufacture_country: manufacture_country,
    })

    newVehicle.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({mag:"vehicle  created"})
        }   
    })
})

router.route("/update-vehicle/:id").put(async (req, res) => {
    let vehicle_id = req.params.id;
    const {
        veh_type,
        veh_make,
        veh_model,
        veh_year,
        veh_no,
        owner_name,
        purchased_date,
        registered_date,
        engine_no,
        chassi_no,
        insurance_date,
        vehicle_weight,
        manufacture_country,
    } = req.body;

    const updateVehicle = {
        veh_type,
        veh_make,
        veh_model,
        veh_year,
        veh_no,
        owner_name,
        purchased_date,
        registered_date,
        engine_no,
        chassi_no,
        insurance_date,
        vehicle_weight,
        manufacture_country,
    }

    const update = await VehicleSchema.findOneAndUpdate(vehicle_id,updateVehicle)
    .then(()=>{
        res.status(200).send({status:"Vehicle updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

router.route("/delete-vehicle/:id").delete(async (req,res)=>{
    let vehicle_id = req.params.id;

    await VehicleSchema.findOneAndDelete(vehicle_id)
        .then(()=>{
            res.status(200).send({
                status:"vehicle deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete vehicle",error :err.message});
        })
})

module.exports = router;