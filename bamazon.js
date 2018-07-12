mysql = require('mysql');

function login() {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Bigbudzz19',
        database: 'bamazon',
    });
}

module.exports = login;