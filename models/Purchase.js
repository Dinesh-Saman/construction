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

    sup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        // required: true,
    },

    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        // required: true,
    },



})


module.exports = mongoose.model("Purchase", PurchaseSchema)