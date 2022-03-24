const express = require('express')
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
    // res.json({ msg: "Post created" })
    console.log(req.body)
})

module.exports = router;