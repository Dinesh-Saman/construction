const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const EngineerSchema = require("../models/Engineer")
router.get("/get-engineers", async (req, res) => {
    // let engineers = EngineerSchema.find({} , function(err , result){
    // if(err){
    // res.json({msg:err})
    // }else{
    // res.json({result})
    // }
    // })
    const engineers = await EngineerSchema.find({}).populate('emp_id').populate('project_id')
    res.json({ "result": engineers })
})
router.get("/get-engineer/:id", async (req, res) => {
    const engineer = EngineerSchema.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json({ "err": err })
        } else {
            res.json({ "result": result })
        }
    })
})
router.post("/add-engineer", async (req, res) => {
    let emp_id = req.body.employee;
    let status = req.body.status;
    let description = req.body.description;
    let project_id = req.body.project;
    let emp = mongoose.Types.ObjectId(emp_id)
    let project = mongoose.Types.ObjectId(project_id)
    const newEngineer = EngineerSchema({
        emp_id: emp,
        status,
        description,
        project_id: project
    })
    newEngineer.save(function (err, result) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ msg: "Completed" })
        }
    })
    // console.log(req)
})
router.delete("/delete-engineer/:id", async (req, res) => {
    let eng_id = req.params.id;
    await EngineerSchema.deleteOne({ _id: eng_id })
        .then(() => {
            res.status(200).send({
                status: "Engineer deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete engineer", error: err.message });
        })
})
router.put("/update-engineer/:id", async (req, res) => {
    let eng_id = req.params.id;
    let emp = req.body.employee;
    let eng_status = req.body.status;
    let description = req.body.description;
    let project_id = req.body.project;
    let empid = mongoose.Types.ObjectId(emp)
    let project = mongoose.Types.ObjectId(project_id)
    var updatedEng = new EngineerSchema({
        _id: eng_id,
        status: eng_status,
        emp_id: empid,
        description,
        project_id: project
    })
    EngineerSchema.updateOne({ _id: eng_id }, updatedEng)
        .then(() => {
            res.status(200).send({
                status: "Engineer update"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with updated engineer", error: err.message });
        })
})
module.exports = router;