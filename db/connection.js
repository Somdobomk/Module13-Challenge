const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'supersecure123',
	database: 'ecommerce',
});
console.log('Connected to database');

module.exports = db;
