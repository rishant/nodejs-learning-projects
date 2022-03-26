const path = require('path');
const rootPath = process.cwd();
const config = require(path.join(rootPath, 'config.json'));
const mysql = require('mysql2');

// Mongo Database Connection
const mysqlProperties = config.mysql;
const mysqlURI = config.mysqlURI;

let connection = mysql.createConnection({
    host: mysqlProperties.host,
    user: mysqlProperties.user,
    password: mysqlProperties.password,
    //database: mysqlProperties.databaseName
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
    // Create Database
    connection.query(`CREATE DATABASE IF NOT EXISTS ${mysqlProperties.databaseName}`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
        // Use Database
        connection.query(`USE ${mysqlProperties.databaseName}`, function (err, result) {
            if (err) throw err;
            console.log("Database Selected");
        });
        // Create Table
        var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });
});

module.exports = connection;