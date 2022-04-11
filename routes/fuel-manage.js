const express = require('express')
const router = express.Router()
const FuelSchema  = require("../models/Fuel")

router.get("/get-fuels" , async(req,res)=>{
    let fuels = FuelSchema.find({} , function(err , fuels){
        if(err){
            res.json({msg:err})
        }else{
            res.json({fuels})
        }
    })
})

router.route("/add-fuel").post((req,res)=>{
    const fuel_lastdate = req.body.fuel_lastdate;
    const fuel_type = req.body.fuel_type;
    const veh_no = req.body.veh_no;
    const veh_year = req.body.veh_year;
    const veh_make = req.body.veh_make;
    const veh_model = req.body.veh_model;
    const quentity = req.body.quentity;
    const amount = req.body.amount;
    const old_reading = req.body.old_reading;
    const new_reading = req.body.new_reading;
    const usage = req.body.usage;
    const dri_name = req.body.dri_name;
    const total_capacity = req.body.total_capacity;
    const fuel_cost = req.body.fuel_cost;

    const newRoute = new FuelSchema({
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
    })

    newRoute.save().then(()=>{
        res.json("Fuel Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update-fuel/:id").put(async (req, res) => {
    let fuel_id = req.params.id;
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

    const updateFuel = {
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

    const update = await FuelSchema.findByIdAndUpdate(fuel_id ,updateFuel)
    .then(()=>{
        res.status(200).send({status:"Fuel updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )



router.route("/delete-fuel/:id").delete(async (req,res)=>{
    let fuel_id = req.params.id;

    await FuelSchema.findByIdAndDelete(fuel_id)
        .then(()=>{
            res.status(200).send({
                status:"fuel deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete fuel",error :err.message});
        })
})




module.exports = router;