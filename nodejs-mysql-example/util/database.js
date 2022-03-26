const path = require('path');
const rootPath = process.cwd();
const config = require(path.join(rootPath, 'config.json'));

// Mongo Database Connection
const mysqlProperties = config.mysql;
const mysqlURI = config.mysqlURI;

let connection = {};

module.exports = connection;