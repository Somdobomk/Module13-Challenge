const db = require('./db/connection');
const inquirer = require('inquirer');
const view = require('./views/view.js');
const add = require('./views/add.js');

db.connect((err) => {
	if (err) throw err;
	console.log('connected as id ' + db.threadId);
	exports.start();
});

exports.start = () => {
	inquirer
		.prompt({
			type: 'list',
			name: 'choices',
			message: 'What would you like to do?',
			choices: [
				'View all departments',
				'View all roles',
				'View all employees',
				'Add a department',
				'Add a role',
				'Add an employee',
				'Update an employee role',
				'Exit',
			],
		})
		.then((answers) => {
			let choice = answers.choices;
			switch (choice) {
				case 'View all departments':
					view.viewDepartments();
					break;
				case 'View all roles':
					view.viewRoles();
					break;
				case 'View all employees':
					view.viewEmployees();
					break;
				case 'Add a department':
					add.addDepartment();
					break;
				case 'Add a role':
					add.addRole();
					break;
				case 'Add an employee':
					add.addEmployee();
					break;
				case 'Update an employee role':
					add.updateEmployeeRole();
					break;
				case 'Exit':
					db.end();
					break;
			}
		});
};
