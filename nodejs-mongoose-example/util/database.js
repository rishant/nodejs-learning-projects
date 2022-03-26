const mongoose = require('mongoose');
const path = require('path');
const rootPath = process.cwd();
const config = require(path.join(rootPath, 'config.json'));

// Mongo Database Connection
const mongoUri = config.mongodb;
let connection = mongoose.createConnection(mongoUri);

module.exports = connection;