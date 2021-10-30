const app = require('../server');
const db = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');

exports.addDepartment = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'department_name',
			message: 'What is the name of the department you would like to add?',
		}.then((response) => insert(response, 'department')),
	]);
};

exports.addRole = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'role_title',
			message: 'What is the title of the role you would like to add?',
		},
		{
			type: 'number',
			name: 'role_salary',
			message: 'What is the salary of the role you would like to add?',
		},
		{
			type: 'input',
			name: 'role_department_id',
			message: 'What is the department id of the role you would like to add?',
		}.then((response) => insert(response, 'role')),
	]);
};

exports.addEmployee = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'employee_first_name',
				message:
					'What is the first name of the employee you would like to add?',
			},
			{
				type: 'input',
				name: 'employee_last_name',
				message: 'What is the last name of the employee you would like to add?',
			},
			{
				type: 'input',
				name: 'employee_role_id',
				message: 'What is the role id of the employee you would like to add?',
			},
			{
				type: 'input',
				name: 'employee_manager_id',
				message:
					'What is the manager id of the employee you would like to add?',
			},
		])
		.then((response) => insert(response, 'employee'));
};

function insert(data, tableName) {
	const sql = '';
	const query = [];

	switch (tableName) {
		case 'department':
			query.push(
				`INSERT INTO department (department_name) VALUES ('${data.department_name}')`
			);
			break;
		case 'role':
			query.push(
				`INSERT INTO role (role_title, role_salary, role_department_id) VALUES ('${data.role_title}', ${data.role_salary}, ${data.role_department_id})`
			);
			break;
		case 'employee':
			query.push(
				`INSERT INTO employee (employee_first_name, employee_last_name, employee_role_id, employee_manager_id) VALUES ('${data.employee_first_name}', '${data.employee_last_name}', ${data.employee_role_id}, ${data.employee_manager_id})`
			);
			break;
	}
}

db.query(sql, (err, row) => {
	if (err) {
		console.log(err);
	} else {
		console.log(row);
	}
	console.log('Successfully added');
	app.start();
});
