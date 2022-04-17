const Engineer = require("../lib/Engineer");

test('can get github account name', () => {
  const github = "gitJohn";
  const employee = new Engineer("John", "ID:45", "employee@gmail.com", "gitJohn");
  expect(employee.github).toBe(github);
});

test("getrole() will return Engineer", () => {
  const role = "Engineer";
  const employee = new Engineer("John", "ID:45", "employee@gmail.com");
  expect(employee.getRole()).toBe(role);
});