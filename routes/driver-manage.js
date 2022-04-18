const express = require('express')
const router = express.Router()
const DriverSchema = require("../models/Driver")

const { route } = require('./driver-manage')

router.get("/get-drivers", async(req, res) => {
    let drivers = DriverSchema.find({}, function(err, drivers) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ drivers })
        }
    })
})

router.route("/add-driver").post((req, res) => {
    const dri_name = req.body.dri_name;
    const dri_nic = req.body.dri_nic;
    const dri_address = req.body.dri_address;
    const dri_contact = req.body.dri_contact;
    const dri_dob = req.body.dri_dob;
    const dri_district = req.body.dri_district;
    const dri_province = req.body.dri_province;
    const dri_licenno = req.body.dri_licenno;
    const dri_licenvalidity = req.body.dri_licenvalidity;
    const dri_issuedate = req.body.dri_issuedate;

    const newRoute = new DriverSchema({
        dri_name,
        dri_nic,
        dri_address,
        dri_contact,
        dri_dob,
        dri_district,
        dri_province,
        dri_licenno,
        dri_licenvalidity,
        dri_issuedate,
    })

    newRoute.save().then(() => {
        res.json("Driver Added")
    }).catch((err) => {
        console.log(err);
    })
})


router.route("/update-driver/:id").put(async(req, res) => {
    let driver_id = req.params.id;
    const {
        dri_name,
        dri_nic,
        dri_address,
        dri_contact,
        dri_dob,
        dri_district,
        dri_province,
        dri_licenno,
        dri_licenvalidity,
        dri_issuedate,
    } = req.body;

    const updateDriver = {
        dri_name,
        dri_nic,
        dri_address,
        dri_contact,
        dri_dob,
        dri_district,
        dri_province,
        dri_licenno,
        dri_licenvalidity,
        dri_issuedate,
    }

    const update = await DriverSchema.findByIdAndUpdate(driver_id, updateDriver)
        .then(() => {
            res.status(200).send({ status: "Driver updated..." })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

router.route("/delete-driver/:id").delete(async(req, res) => {
        const update = await DriverSchema.findByIdAndUpdate(driver_id, updateDriver)
            .then(() => {
                res.status(200).send({ status: "Driver updated..." })
            }).catch((err) => {
                console.log(err);
                res.status(500).send({ status: "Error with updating data", error: err.message });
            })
    })
    /* 
    router.route("/delete-driver/:id").delete(async (req,res)=>{
        let driver_id = req.params.id;

        await DriverSchema.findByIdAndDelete(driver_id)
            .then(() => {
                res.status(200).send({
                    status: "driver deleted"
                });
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({ status: "Error with delete driver", error: err.message });
            })
    })

    */

router.delete("/delete-driver/:id", async(req, res) => {
    let driver_id = req.params.id;

    //console.log(driver_id)wwdd

    await DriverSchema.deleteOne({ _id: driver_id })
        .then(() => {
            res.status(200).send({
                status: "driver deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete driver", error: err.message });
        })
})



router.delete("/delete-driver/:id", async(req, res) => {
    let driver_id = req.params.id;

    //console.log(driver_id)wwdd

    await DriverSchema.deleteOne({ _id: driver_id })
        .then(() => {
            res.status(200).send({
                status: "driver deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete driver", error: err.message });
        })
})

module.exports = router;