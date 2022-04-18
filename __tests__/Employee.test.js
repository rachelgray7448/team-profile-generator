const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test("can set employee name", () => {
    const name = "Rachel";
    const newEmployee = new Employee(name);
    expect (newEmployee.name).toBe(name);
});

test("can set employee id", () => {
    const id = "7448";
    const newEmployee = new Employee("name", id);
    expect (newEmployee.id).toBe(id);
});

test("can set employee email", () => {
    const email = "rachel.gray7448@gmail.com";
    const newEmployee = new Employee("name", "id", email);
    expect (newEmployee.email).toBe(email);
});

test("getName returns employee's name", () => {
    const name = "Rachel";
    const newEmployee = new Employee(name);
    expect (newEmployee.getName()).toBe(name);
});

test("getId returns employee's ID", () => {
    const id = "7448";
    const newEmployee = new Employee("name", id);
    expect (newEmployee.getId()).toBe(id);
});

test("getEmail returns employee's email", () => {
    const email = "rachel.gray7448@gmail.com";
    const newEmployee = new Employee("name", "id", email);
    expect (newEmployee.getEmail()).toBe(email);
});

test("getRole returns a string that says employee", () => {
    const role = "Employee";
    const newEmployee = new Employee("name", "id", "email");
    expect (newEmployee.getRole()).toBe(role);
});



