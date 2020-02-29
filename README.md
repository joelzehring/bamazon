# bamazon
CLI Inventory Management App with MySQL and Node
Browse a list of items in a pretend inventory, then select an item and quantity. If there's enough in stock, your order will be placed. If not, the app will let you know!

## Project Structure
App logic lives in the `bamazonCustomer.js` file. MySQL commands to set up the database locally can be found in `bamazon.sql`.

1. Install [node.js](https://nodejs.org).
2. Clone this repo to the directory of your choice.
3. Navigate to the directory via command line and run `npm install` to install dependencies.
* [mysql](https://www.npmjs.com/package/mysql)
* [inquirer](https://www.npmjs.com/package/inquirer)
4. Get a MySQL database up and running and update the `bamazonCustomer.js` file with the database information.
5. Back in the command line, run `node bamazonCustomer.js` to run the app and follow the instructions.  