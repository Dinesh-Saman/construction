const { default: mongoose } = require("mongoose");

const ProjectSchema = new mongoose.Schema({

    proj_name: {
        type: String,
        required: true
    },
    approval_date: {
        type: Date,
        require: true,
    },
    status: {
        type: String,
        enum: ["Complete", "Ongoing"],
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "//table name",
        required: true
    },


})