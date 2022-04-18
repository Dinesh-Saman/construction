const express = require('express')
const router = express.Router()
const ClientSchema = require("../models/Client")

router.get("/get-Client", async(req, res) => {
    let Client = ClientSchema.find({}, function(err, Client) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ Client })
        }
    })
})

router.post("/add-client", async(req, res) => {
    // console.log(req.body)
    let fName = req.body.first_name;
    let lName = req.body.last_name;
    let address = req.body.address;
    let contact_no = req.body.contact_no;
    let email = req.body.email;
    let nic = req.body.nic

    let newClient = ClientSchema({
        first_name: fName,
        last_name: lName,
        address,
        contact_no,
        email,
        nic_no: nic
    })

    newClient.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })

    // console.log(req)

})


module.exports = router;