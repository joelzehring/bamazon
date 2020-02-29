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
  console.log("Welcome to Bamazon!\nConnected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Loop through all inventory items and print to console ids, names, and prices
    for (var i of res) {
      console.log(`
      ----------
      | Item ID#: ${i.item_id}
      | Name: ${i.product_name}
      | Price: ${i.price}
      ----------
      `
      );
    }

    inquirer
      .prompt([
        {
          type: "input",
          message: "What would you like to buy?",
          name: "userItem"
        },
        {
          type: "input",
          message: "How many would you like to buy?",
          name: "userQuantity"
        }
      ])
      .then(function(response) {
        var userItem = response.userItem;

        var dbItem = res.find( ({item_id}) => item_id == userItem);

        // complete transaction
        if (dbItem.stock_quantity >= response.userQuantity) {
          var total = dbItem.price * response.userQuantity;
          var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {stock_quantity: dbItem.stock_quantity - response.userQuantity},
              {item_id: userItem}
            ],
            function(err, updateRes) {
              if (err) throw err;
              console.log(`Your order for ${dbItem.product_name} has been placed!\nAmount due ${total}.`);
            }
          );
        } else {
          console.log("Insufficient quanitity!");
        }
        connection.end();
      });
  });
}