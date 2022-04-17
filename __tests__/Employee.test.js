const Employee = require("../lib/Employee");



test('creates employee object', () => {
  const employee = new Employee();
  expect(typeof employee).toBe('object')
});

test('can set name of Employee', () => {
  const name = "John";
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
});

test('can set ID of Employee', () => {
  const id = "Id:45";
  const employee = new Employee("", id);
  expect(employee.id).toBe(id);
});

test('can set email of Employee', () => {
  const email = "employee@gmail.com";
  const employee= new Employee("", "", email);
  expect(employee.email).toBe(email);
})
test('can get name of Employee', () => {
  const name = "John";
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
});

test('can get ID of Employee', () => {
  const id = "Id:45";
  const employee = new Employee("", id);
  expect(employee.id).toBe(id);
});

test('can get email of Employee', () => {
  const email = "employee@gmail.com";
  const employee= new Employee("", "", email);
  expect(employee.email).toBe(email);
})

test("getrole() will return 'Employee' ", () => {
  const role = "Employee"
  const employee = new Employee("", "", "");
  expect(employee.getRole()).toBe(role);
});