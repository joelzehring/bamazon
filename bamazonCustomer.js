var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Zeph#317",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Loop through all inventory items and print to console ids, names, and prices
    for (var i of res) {
      console.log(`
      Item ID#: ${i.item_id}
      Name: ${i.product_name}
      Price: ${i.price}
      `
      );
    }
    connection.end();
  });
}