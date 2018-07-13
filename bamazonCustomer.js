mysql = require('mysql');
inquirer = require('inquirer');

function login() {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'bamazon',
    });
}

module.exports = login;