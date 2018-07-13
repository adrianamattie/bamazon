mysql = require('mysql');
inquire = require('inquirer');



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: 'bamazon',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

var tbl = "products";
var get = "SELECT * from " + tbl;

connection.query(get, function (err, result) {
    if (err) {
        throw err;
        connection.end();
    };
    console.log('we have the following items for sale.')
    for (var i = 0; i < result.length; i++) {
        console.log(result[i].id + ": " + result[i].product_name + " $" + result[i].price);
    }
    buy();
});

function buy() {
    inquire.prompt([{
            type: "input",
            message: "What item would you like to buy? Type in the ID.",
            name: "id"
        },
        {
            type: "input",
            message: "How many would you like to buy from my Bamazon store? Please type the quality.",
            name: "quantity"
        }
    ]).then((data) => {
        var product = parseInt(data.id);
        var quantity = parseInt(data.quantity);

        connection.query("SELECT * FROM products WHERE id= " + product + ";", function (err, result) {
            if (err) {
                throw err;
                connection.end();
            };

            var cost = result[0].price;
            var productPick = result[0].product_name;
            var stockLeft = result[0].stock_quantity; 

            if (stockLeft < quantity) {
                console.log("Insufficient quantity! You should have bought it earlier!")
            } else {
                connection.query("UPDATE products SET stock_quantity = " + (parseInt(stockLeft) - quantity) + " WHERE id =" + product + ";", function (err, result) {
                    if (err) {
                        console.log(err)
                    };
                });
            };
            console.log("Your Total is: $" + quantity * cost + " for " + quantity + " " + productPick)

        });

    });
};