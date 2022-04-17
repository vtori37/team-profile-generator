const Intern = require("../lib/Intern");

test('can get school name', () => {
  const school = "FIU";
  const employee = new Intern("John", "ID:45", "employee@gmail.com", "FIU");
  expect(employee.school).toBe(school);
});

test("getrole() will return Intern", () => {
  const role = "Intern";
  const employee = new Intern("John", "ID:45", "employee@gmail.com");
  expect(employee.getRole()).toBe(role);
});