import Customer from "../nodejs-mongoose-example/modules/customer";
import Order from "../nodejs-mongoose-example/modules/order";


curdCustomer();
// C-U-R-D 
async function curdCustomer() {
  await createCustomers();
  await getCustomer();
  await deleteCustomer();
  await getCustomer();  
} 

async function createCustomers() {
  console.log("Customers added: ");
}

async function deleteCustomer() {
  console.log("Customer deleted: ");
}

async function getCustomer() {
  console.log("Customer find: ");
}