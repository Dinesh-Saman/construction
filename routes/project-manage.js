const express = require('express')
const mongoose = require("mongoose")
const router = express.Router()
const ProjectSchema = require("../models/Project")

router.get("/get-projects", async(req, res) => {
    let projects = ProjectSchema.find({}, function(err, projects) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ projects })
        }
    })
})


router.post("/create-project", async(req, res) => {

    console.log(req.body)

    let proName = req.body.proj_name;
    let approvalDate = req.body.approval_date;
    let status = req.body.status;
    let location = req.body.location;
    let desc = req.body.description;
    let clientid = req.body.client_id;

    let client = mongoose.Types.ObjectId(clientid)

    let newProject = ProjectSchema({
        proj_name: proName,
        approval_date: approvalDate,
        status,
        location,
        description: desc,
        client_id: client
    })

    newProject.save(function(err, result) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ msg: "Completed" })
        }
    })

})

module.exports = router;