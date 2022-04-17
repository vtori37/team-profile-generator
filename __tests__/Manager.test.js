const Manager = require("../lib/Manager");

test('can create office number', () => {
  const officeNumber = "205";
  const employee = new Manager("John", "ID:45", "employee@gmail.com", "205");
  expect(employee.officeNumber).toBe(officeNumber);
});

test("getrole() will return Manager", () => {
  const role = "Manager";
  const employee = new Manager("John", "ID:45", "employee@gmail.com");
  expect(employee.getRole()).toBe(role);
});