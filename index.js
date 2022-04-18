const inquirer = require('inquirer');
const fs = require('fs');

// new /* app */().initialize/*app */();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");
// const generateHTML = require("");


const promptUser = [
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?"
    },
    {
      type: "input",
      name: "employeeID",
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
  ];
    
    const promptManager = [
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager?',
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please provide the manager's office number.");
            return false;
          }
        }
      },
    ];


    const promptEngineer = [
      {
        type: 'input',
        name: "github",
        message:"What is the employee's github username?",
        validate: github => {
          if (github) {
            return true;
          } else {
            console.log("Please provide a github account username.");
            return false;
          }
        }
      },
    ];


    const promptIntern = [
      {
        type: 'input',
        name: "school",
        message: "What is the name of the intern's school?",
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log("Please provide the intern's school name.");
            return false;
          }
        }
      },
    ];
    

    
    

    function init() {
      inquirer
      .prompt(promptUser)
      .then(data => {
        console.log('');
        if (data.role === 'Manager') {
          promptManager();
        }
        if (data.role === 'Engineer') {
          promptEngineer(data);
        }
        if (data.role === 'Intern') {
          promptIntern(data);
        }
     
         // writeToFile("README.md", generateMarkdown(data));
      })      
    }
    
    
    //  const writeToFile(fileName, data) {
    //    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
    //  }
    
    init();
    


