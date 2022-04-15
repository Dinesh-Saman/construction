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


module.exports = router;