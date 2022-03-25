const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema({


    invoice_date: {
        type: Date,
        required: true
    },

    unit_price: {
        type: Number,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
    },

    total_amount: {
        type: Number,
        required: true,
    },

    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
<<<<<<< HEAD
        // required: true,
=======
        required: true,
>>>>>>> 96bb23fd4c89608277fee731cf34b1e54f0fda8b
    },

    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
<<<<<<< HEAD
        // required: true,
=======
        required: true,
>>>>>>> 96bb23fd4c89608277fee731cf34b1e54f0fda8b
    },



})


module.exports = mongoose.model("Purchase", PurchaseSchema)