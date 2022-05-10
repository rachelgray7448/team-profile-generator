const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

const basicQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'What type of Employee would you like to add?',
        choices: ['Manager', 'Intern', 'Engineer']
    },


    {
        type: 'input',
        name: 'name',
        message: 'What is your employees name?'
    },
    
    {
        type: 'input',
        name: 'id',
        message: 'Please provide the employee ID:'
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the employees email address:'
    },

];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the employees office number:'
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the employees school:'
    }  
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the employees GitHub username:'
    }
];

function addEmployee() {
    inquirer.prompt(basicQuestions).then(function({name, role, id, email}){
        let newEmployee;
        if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then(function({github}) {
                newEmployee = new Engineer(name, id, email, github);
                employees.push(newEmployee);
                console.log(employees);
                inquirer.prompt([{
                    type:'list',
                    name: 'more',
                    message: 'Do you want to add another employee?',
                    choices: ['yes', 'no']
                }]).then(function({more}) {
                    if (more === 'yes') {
                        addEmployee();
                    }
                    else {
                        console.log('Employee(s) have been added!')
                    }
                })

            });
    
        }
        if (role === "Manager") {
            inquirer.prompt(managerQuestions).then(function({officeNumber}) {
                newEmployee = new Manager(name, id, email, officeNumber);
                employees.push(newEmployee);
                console.log(employees);
                inquirer.prompt([{
                    type:'list',
                    name: 'more',
                    message: 'Do you want to add another employee?',
                    choices: ['yes', 'no']
                }]).then(function({more}) {
                    if (more === 'yes') {
                        addEmployee();
                    }
                    else {
                        console.log('Employee(s) have been added!')
                    }
                })
            });
    
        }
        if (role === "Intern") {
            inquirer.prompt(internQuestions).then(function({school}) {
                newEmployee = new Intern(name, id, email, school);
                employees.push(newEmployee);
                console.log(employees);
                inquirer.prompt([{
                    type:'list',
                    name: 'more',
                    message: 'Do you want to add another employee?',
                    choices: ['yes', 'no']
                }]).then(function({more}) {
                    if (more === 'yes') {
                        addEmployee();
                    }
                    else {
                        console.log('Employee(s) have been added!')
                    }
                })
            });
    
        }
    })
}

addEmployee();


// generate a string of html