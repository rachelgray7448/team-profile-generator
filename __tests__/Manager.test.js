const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test("can set manager values properly", () => {
    const name = "Rachel";
    const id = "7448";
    const email = "rachel.gray7448@gmail.com";
    const newManager = new Manager(name, id, email);
    expect (newManager.name).toBe(name);
    expect(newManager.id).toBe(id);
    expect(newManager.email).toBe(email);
});

test("returns the employees role", () => {
    const role = "Manager";
    const newManager = new Manager ("name", "id", "email");
    expect(newManager.getRole()).toBe(role);
})