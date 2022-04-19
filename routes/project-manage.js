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
    //let clientid = req.body.client_id;

    //let client = mongoose.Types.ObjectId(clientid)

    let newProject = ProjectSchema({
        proj_name: proName,
        approval_date: approvalDate,
        status,
        location,
        description: desc,
        //client_id: client
    })

    newProject.save(function(err, result) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ msg: "Completed" })
        }
    })




    console.log(req.body)
})

//update method
router.route("/update-project/:id").put(async(req, res) => {
    let project_id = req.params.id;
    const {
        proj_name,
        approval_date,
        status,
        location,
        description,
        //client_id,
    } = req.body;

    const updateProject = {
        proj_name,
        approval_date,
        status,
        location,
        description,
        //client_id,
    }

    const update = await ProjectSchema.findByIdAndUpdate(project_id, updateProject)
        .then(() => {
            res.status(200).send({ status: "Project updated..." })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating project", error: err.message });
        })
})


//delete method
router.delete("/delete-project/:id", async(req, res) => {
    let project_id = req.params.id;


    await ProjectSchema.deleteOne({ _id: project_id })
        .then(() => {
            res.status(200).send({
                status: "project deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete project", error: err.message });
        })
})



module.exports = router;