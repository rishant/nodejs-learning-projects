const mongoose = require('mongoose');
const connection = require("../util/database");

// Mongo Document Schema Creation
const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

  // Mongo Collection Creation
const Customer = connection.model('Customer', customerSchema);

module.exports = Customer;