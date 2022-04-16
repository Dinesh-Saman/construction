const express = require('express')
const router = express.Router()
const EquipmentSchema  = require("../models/Equipment")

router.get("/get-equipments" , async(req,res)=>{
    let equipments = EquipmentSchema.find({} , function(err , equipments){
        if(err){
            res.json({msg:err})
        }else{
            res.json({equipments})
        }
    })
})

router.route("/add-equipment").post((req,res)=>{
    const eq_type = req.body.eq_type;
    const eq_model = req.body.eq_model;
    const eq_no = req.body.eq_no;
    const manufacture_country = req.body.manufacture_country;
    const owner_name= req.body.owner_name;
    const owner_address = req.body.owner_address;
    const eq_weight = Number(req.body.eq_weight);
    const eq_purchase_date = req.body.eq_purchase_date;
    const eq_operator = req.body.eq_operator;
 
    const newEquipment = new EquipmentSchema({
        eq_type,
        eq_model,
        eq_no,
        manufacture_country,
        owner_name,
        owner_address,
        eq_weight,
        eq_purchase_date,
        eq_operator,
    })

    newEquipment.save().then(()=>{
        res.json("Equipment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update-equipment/:id").put(async (req, res) => {
    let equipment_id = req.params.id;
    const {
        eq_type,
        eq_model,
        eq_no,
        manufacture_country,
        owner_name,
        owner_address,
        eq_weight,
        eq_purchase_date,
        eq_operator,
    } = req.body;

    const updateEquipment = {
        eq_type,
        eq_model,
        eq_no,
        manufacture_country,
        owner_name,
        owner_address,
        eq_weight,
        eq_purchase_date,
        eq_operator,
    }

    const update = await EquipmentSchema.findByIdAndUpdate(equipment_id ,updateEquipment)
    .then(()=>{
        res.status(200).send({status:"Equipment updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

router.route("/delete-equipment/:id").delete(async (req,res)=>{
    let equipment_id = req.params.id;

    await EquipmentSchema.findByIdAndDelete(equipment_id)
        .then(()=>{
            res.status(200).send({
                status:"equipment deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete equipment",error :err.message});
        })
})



module.exports = router;