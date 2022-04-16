/* name

id

email

getName()

getId()

getEmail()

getRole() */ //returns 'Employee'

const Employee = require("../lib/Employee");

class Employee {

  constructor(name, id, email, role) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
}

}

test('creates employee object', () => {
  const employee = new Employee('', '');

});