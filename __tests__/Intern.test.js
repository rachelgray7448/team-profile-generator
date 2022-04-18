const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test("can set intern values properly", () => {
    const name = "Rachel";
    const id = "7448";
    const email = "rachel.gray7448@gmail.com";
    const school = "Michigan State University"
    const newIntern = new Intern(name, id, email, school);
    expect (newIntern.name).toBe(name);
    expect(newIntern.id).toBe(id);
    expect(newIntern.email).toBe(email);
    expect(newIntern.school).toBe(school);
});

test("returns school name", () => {
    const school = "Michigan State University";
    const newIntern = new Intern("name", "id", "email", school);
    expect(newIntern.getSchool()).toBe(school);
});

test("returns employee role", () => {
    const role = "Intern";
    const newIntern = new Intern("name", "id", "email", "school");
    expect(newIntern.getRole()).toBe(role);
});
