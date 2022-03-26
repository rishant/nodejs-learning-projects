//const connection = require("./util/database");
const f = require("./util/database");
const path = require('path');
const rootPath = process.cwd();
const config = require(path.join(rootPath, 'config.json'));

curdCustomer();

// C-U-R-D 
async function curdCustomer() {
  console.log("Helloworld")
  await f.useDataBase();
  console.log("Helloworld 2")

  // Database Selection
  //f.connection.query(`USE ${config.mysql.databaseName}`, function (err, result) {
  //  if (err) throw err;
  //  console.log("Database Selected 2");

    // Insert Record
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    f.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    // Select Records
    f.connection.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    // Select Records with where Condition
    f.connection.query("SELECT * FROM customers WHERE name = 'Company Inc'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });

    // Update Records
    var sql = "UPDATE customers SET name = 'Canyon 123' WHERE name = 'Company Inc'";
    f.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });

    // Delete
    var sql = "DELETE FROM customers WHERE name = 'Company Inc'";
    f.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });

    // Delete
    var sql = "DELETE FROM customers WHERE name = 'Canyon 123'";
    f.connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
 // });
}