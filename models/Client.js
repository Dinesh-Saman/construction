const { default: mongoose } = require("mongoose");

const ClientSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nic_no: {
        type: String,
        unique: true,
        required: true
    },
    appoint_id: {
        type: String,
        unique: true,
        required: true
    },
    proj_id: {
        type: String,
        unique: true,
        required: true
    },


})