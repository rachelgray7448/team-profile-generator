const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test("can set engineer values properly", () => {
    const name = "Rachel";
    const id = "7448";
    const email = "rachel.gray7448@gmail.com";
    const github = "rachelgray7448"
    const newEngineer = new Engineer(name, id, email, github);
    expect (newEngineer.name).toBe(name);
    expect(newEngineer.id).toBe(id);
    expect(newEngineer.email).toBe(email);
    expect(newEngineer.github).toBe(github);

})

test("returns github name", () => {
    const github = "rachelgray7448";
    const newEngineer = new Engineer("name", "id", "email", github);
    expect(newEngineer.getGithub()).toBe(github);
})

test("returns role", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("name", "id", "email", "github");
    expect(newEngineer.getRole()).toBe(role);
})