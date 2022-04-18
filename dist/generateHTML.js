
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please insert the employee's email.",
    },
    {
      type: 'checkbox',
      name: 'role',
      message: 'Please choose the role of the Employee.',
      choices: ['Manager', 'Engineer', 'Intern'],      
    },
  ])
  .then(function(data) {
    console.log('');
    if (data.role === 'Manager') {
      promptManager(data);
    }
      if (data.role === 'Engineer') {
        promptEngineer(data);
      }
      if (data.role === 'Intern') {
        promptIntern(data);
      }
    })
  }