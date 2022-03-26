const path = require('path');
const rootPath = process.cwd();
const Customer = require("./modules/customer");
const Order = require("./modules/order");

curdCustomer();
// C-U-R-D 
async function curdCustomer() {
  await createCustomers();
  await getCustomer();
  await deleteCustomer();
  await getCustomer();  
} 

async function createCustomers() {
  let customers = await Customer.insertMany([{
    name: "Joey Tribianni",
    email: "jt@gmail.com"
  }]);
  console.log("Customers added: ", customers);
}

async function deleteCustomer() {
  let deletedCustomer = await Customer.deleteOne({name: "Joey Tribianni"});
  console.log("Customer deleted: ", deletedCustomer);
}

async function getCustomer() {
  const findCustomer = await Customer.find({name: "Joey Tribianni"});
  console.log("Customer find: ", findCustomer);
}