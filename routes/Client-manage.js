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

router.post("/add-client" , async(req,res)=>{
    // console.log(req.body)
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let address = req.body.address;
    let contact_no = req.body.contact_no;
    let email = req.body.email;
    let nic_no = req.body.nic_no;
    let proj_id = req.body.proj_id;

    let newClient = ClientSchema({
        first_name:first_name,
        last_name:last_name,
        address:address,
        contact_no,
        email:email,
        nic_no:nic_no,
        proj_id:proj_id
    })

    newClient.save(function(err,result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({msg:"Completed"})
        }
    })

})

    // console.log(req)



module.exports = router;