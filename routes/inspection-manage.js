const express = require('express')
const router = express.Router()
const InspectionSchema  = require("../models/Vehicle_Inspection")

router.get("/get-inspections" , async(req,res)=>{
    let inspections = InspectionSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({result})
        }
    })
})

router.route("/add-inspection").post((req,res)=>{
    const inspection_date = req.body.inspection_date;
    const veh_no = req.body.veh_no;
    const veh_type = req.body.veh_type;
    const veh_model = req.body.veh_model;
    const veh_make = req.body.veh_make;
    const owner_name = req.body.owner_name;
    const status = req.body.status;
 
    const newInspection = new InspectionSchema({

        inspection_date,
        veh_no,
        veh_type,
        veh_make,
        veh_model,
        owner_name,
        status,
        
    })

    newInspection.save().then(()=>{
        res.json("Inspection Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update-inspection/:id").put(async (req, res) => {
    let inspection_id = req.params.id;
    const {
        inspection_date,
        veh_no,
        veh_type,
        veh_make,
        veh_model,
        owner_name,
        status,
    } = req.body;

    const updateInspection = {
        inspection_date,
        veh_no,
        veh_type,
        veh_make,
        veh_model,
        owner_name,
        status,
    }

    const update = await InspectionSchema.findByIdAndUpdate(inspection_id ,updateInspection)
    .then(()=>{
        res.status(200).send({status:"Inspection updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

router.route("/delete-inspection/:id").delete(async (req,res)=>{
    let inspection_id = req.params.id;

    await InspectionSchema.findByIdAndDelete(inspection_id)
        .then(()=>{
            res.status(200).send({
                status:"Inspection deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete inspection",error :err.message});
        })
})


module.exports = router;