const express = require('express')
const router = express.Router()
const ConsignmentSchema  = require("../models/Consignment")

router.get("/get-consignments" , async(req,res)=>{
    let consignments = ConsignmentSchema.find({} , function(err , consignments){
        if(err){
            res.json({msg:err})
        }else{
            res.json({consignments})
        }
    })
})

router.route("/add-consignment").post((req,res)=>{
    const transport_date = req.body.transport_date;
    const transport_from = req.body.transport_from;
    const transport_to = req.body.transport_to;
    const consigner = req.body.consigner;
    const consignee = req.body.consignee;
    const route = req.body.route;
    const max_weight = req.body.max_weight;
    const driver = req.body.driver;
    const assistance_driver = req.body.assistance_driver;
    const carrier = req.body.carrier;
    const distance = req.body.distance;

    const newRoute = new ConsignmentSchema({
        transport_date,
        transport_from,
        transport_to,
        consigner,
        consignee,
        route,
        max_weight,
        driver,
        assistance_driver,
        carrier,
        distance,
    })

    newRoute.save().then(()=>{
        res.json("Consignment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update-consignment/:id").put(async (req, res) => {
    let consignment_id = req.params.id;
    const {
        transport_date,
        transport_from,
        transport_to,
        consigner,
        consignee,
        route,
        max_weight,
        driver,
        assistance_driver,
        carrier,
        distance,
    } = req.body;

    const updateConsignment = {
        transport_date,
        transport_from,
        transport_to,
        consigner,
        consignee,
        route,
        max_weight,
        driver,
        assistance_driver,
        carrier,
        distance,
    }

    const update = await ConsignmentSchema.findByIdAndUpdate(consignment_id,updateConsignment)
    .then(()=>{
        res.status(200).send({status:"Consignment updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )

router.route("/delete-consignment/:id").delete(async (req,res)=>{
    let consignment_id = req.params.id;

    await ConsignmentSchema.findByIdAndDelete(consignment_id)
        .then(()=>{
            res.status(200).send({
                status:"consignment deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete consignment",error :err.message});
        })
})

module.exports = router;