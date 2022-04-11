const express = require('express')
const router = express.Router()
const VehicleSchema  = require("../models/Vehicle")

router.get("/get-vehicles" , async(req,res)=>{
    let vehicles = VehicleSchema.find({} , function(err , vehicles){
        if(err){
            res.json({msg:err})
        }else{
            res.json({vehicles})
        }
    })
})

router.route("/add-vehicle").post((req,res)=>{
    const veh_type = req.body.veh_type;
    const veh_make = req.body.veh_make;
    const veh_model = req.body.veh_model;
    const veh_year = req.body.veh_year;
    const veh_no = req.body.veh_no;
    const owner_name = req.body.owner_name;
    const purchased_date = req.body.purchased_date;
    const registered_date = req.body.registered_date;
    const engine_no = req.body.engine_no;
    const chassi_no = req.body.chassi_no;
    const insurance_date = req.body.insurance_date;
    const vehicle_weight = req.body.vehicle_weight;
    const manufacture_country = req.body.manufacture_country;

    const newRoute = new VehicleSchema({
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
    })

    newRoute.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
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

    const update = await VehicleSchema.findByIdAndUpdate(vehicle_id,updateVehicle)
    .then(()=>{
        res.status(200).send({status:"Vehicle updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

router.route("/delete-vehicle/:id").delete(async (req,res)=>{
    let vehicle_id = req.params.id;

    await VehicleSchema.findByIdAndDelete(vehicle_id)
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