const app = require('../server');
const db = require('../db/connection');
require('console.table');

exports.viewDepartments = (req, res) => {
	db.query('SELECT * FROM departments', (err, data) => {
		if (err) {
			console.log(err);
		}
		console.table(data.rows);
		app.start();
	});
};

exports.viewRoles = (req, res) => {
	db.query('SELECT * FROM roles', (err, data) => {
		if (err) {
			console.log(err);
		}
		console.table(data.rows);
		app.start();
	});
};

exports.viewEmployees = (req, res) => {
	db.query('SELECT * FROM employees', (err, data) => {
		if (err) {
			console.log(err);
		}
		console.table(data.rows);
		app.start();
	});
};
