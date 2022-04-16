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
        enum: ["COMPLETED", "ONGOING"],
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
        ref: "Client",
    },


})

module.exports = mongoose.model("Project", ProjectSchema)