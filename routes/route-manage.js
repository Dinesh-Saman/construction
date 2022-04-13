const express = require('express')
const router = express.Router()
const RouteSchema  = require("../models/Route")
const { route } = require('./route-manage')

router.get("/get-routes" , async(req,res)=>{
    let routes = RouteSchema.find({} , function(err , routes){
        if(err){
            res.json({msg:err})
        }else{
            res.json({routes})
        }
    })
})

router.route("/add-route").post((req,res)=>{
    const transport_from = req.body.transport_from;
    const transport_to = req.body.transport_to;
    const distance = req.body.distance;
    const road_numbers = req.body.road_numbers;
    const traffic_level = req.body.traffic_level;

    const newRoute = new RouteSchema({
        transport_from,
        transport_to,
        distance,
        road_numbers,
        traffic_level
    })

    newRoute.save().then(()=>{
        res.json("Route Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update-route/:id").put(async (req, res) => {
    let route_id = req.params.id;
    const {transport_from,transport_to,distance,road_numbers,traffic_level} = req.body;

    const updateRoute = {
        transport_from,
        transport_to,
        distance,
        road_numbers,
        traffic_level
    }

    const update = await RouteSchema.findByIdAndUpdate(route_id,updateRoute)
    .then(()=>{
        res.status(200).send({status:"Route updated..."})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
} )
 

router.route("/delete-route/:id").delete(async (req,res)=>{
    let route_id = req.params.id;

    await RouteSchema.findByIdAndDelete(route_id)
        .then(()=>{
            res.status(200).send({
                status:"user deleted"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with delete user",error :err.message});
        })
})


module.exports = router;