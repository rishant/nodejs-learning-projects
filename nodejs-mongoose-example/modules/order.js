const mongoose = require('mongoose');
const connection = require("../util/database");
const Customer = require("./customer");

// Mongo Document Schema Creation
const orderSchema = new mongoose.Schema({

    total: {
        type: Number,
        require: true
    },
    customerId: {
        type: mongoose.Types.ObjectId,
        ref: Customer,
        require: true,
        index: true
    }
});

  // Mongo Collection Creation
const Order = connection.model('Order', orderSchema);

module.exports = Order;