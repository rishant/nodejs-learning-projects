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

let pool = mysql.createPool({
    host: mysqlProperties.host,
    user: mysqlProperties.user,
    password: mysqlProperties.password,
    database: mysqlProperties.databaseName
});


createDataBase = () => {
    return new Promise((resolve, reject) => {
        // Create Database
        connection.query(`CREATE DATABASE IF NOT EXISTS ${mysqlProperties.databaseName}`, function (err, result) {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

useDataBase = () => {
    return new Promise((resolve, reject) => {
        // Use Database
        connection.query(`USE ${mysqlProperties.databaseName}`, function (err, result) {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

createTable = () => {
    return new Promise((resolve, reject) => {
        // Create Table
        var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
        connection.query(sql, function (err, result) {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

// async/await - way - implementation
async function initDatabase() {
    connection.connect(async (err) => {
        if (err) throw err;
        console.log('Connected to MySQL Server!');
        try {
            const result1 = await createDataBase();
            console.log("Database created");
            const result2 = await useDataBase();
            console.log("Database Selected");
            const result3 = await createTable();
            console.log("Table created");
    
            // here you can do something with the three results    
        } catch (error) {
            console.log(error)
        }
    });
}
initDatabase();

// Callback Handling - way - implementation
/*
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
*/
module.exports = {connection, pool, useDataBase};