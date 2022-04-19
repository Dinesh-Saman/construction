const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const EmploeeSchema = require("../models/Employee")

router.get("/get-employees", async(req, res) => {
    let employees = EmploeeSchema.find({}, function(err, employees) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ employees })
        }
    })
})

router.post("/add-employee", async(req, res) => {
    //   console.log(req.body)
    var emp_name = req.body.emp_name;
    var emp_phone_no = req.body.emp_phone_no;
    var emp_email = req.body.emp_email;
    var emp_photo = req.body.emp_photo;
    var emp_address = req.body.emp_address;
    var emp_dob = req.body.emp_dob;
    var emp_gender = req.body.emp_gender;
    var emp_nic = req.body.emp_nic;
    var emp_epf_no = req.body.emp_epf_no;
    var emp_join_date = req.body.emp_join_date;
    var emp_cv = req.body.emp_cv;
    var dept_id = req.body.dept_id;
    var emp_type = req.body.emp_type;
    var emp_account_id = req.body.emp_account_id;

    var newEmployee = new EmploeeSchema({
        emp_name: emp_name,
        emp_phone_no: emp_phone_no,
        emp_email: emp_email,
        emp_photo: emp_photo,
        emp_address: emp_address,
        emp_dob: emp_dob,
        emp_gender: emp_gender,
        emp_nic: emp_nic,
        emp_epf_no: emp_epf_no,
        emp_join_date: emp_join_date,
        emp_cv: emp_cv,
        emp_type: emp_type,
        dept_id: mongoose.Types.ObjectId(dept_id),
        emp_account_id: mongoose.Types.ObjectId(emp_account_id)

    })

    newEmployee.save(function(err, result) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ msg: "Completed" })
        }
    })

})

router.put("/update-employee/:id", async(req, res) => {
    let employee_id = req.params.id;

    var emp_name = req.body.emp_name;
    var emp_phone_no = req.body.emp_phone_no;
    var emp_email = req.body.emp_email;
    var emp_photo = req.body.emp_photo;
    var emp_address = req.body.emp_address;
    var emp_dob = req.body.emp_dob;
    var emp_gender = req.body.emp_gender;
    var emp_nic = req.body.emp_nic;
    var emp_epf_no = req.body.emp_epf_no;
    var emp_join_date = req.body.emp_join_date;
    var emp_cv = req.body.emp_cv;
    var dept_id = req.body.dept_id;
    var emp_type = req.body.emp_type;
    var emp_account_id = req.body.emp_account_id;

    var newEmployee = new EmploeeSchema({
        _id: employee_id,
        emp_name: emp_name,
        emp_phone_no: emp_phone_no,
        emp_email: emp_email,
        emp_photo: emp_photo,
        emp_address: emp_address,
        emp_dob: emp_dob,
        emp_gender: emp_gender,
        emp_nic: emp_nic,
        emp_epf_no: emp_epf_no,
        emp_join_date: emp_join_date,
        emp_cv: emp_cv,
        emp_type: emp_type,
        dept_id: dept_id,
        emp_account_id: emp_account_id

    })

    EmploeeSchema.updateOne({ _id: employee_id }, newEmployee)
        .then(() => {
            res.status(200).send({
                status: "employee updated"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with updated employee", error: err.message });
        })

})

router.delete("/delete-employee/:id", async(req, res) => {
    let employee_id = req.params.id;

    //console.log(employee_id)

    await EmploeeSchema.deleteOne({ _id: employee_id })
        .then(() => {
            res.status(200).send({
                status: "employee deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete employee", error: err.message });
        })
})



module.exports = router;