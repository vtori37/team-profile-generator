const inquirer = require('inquirer');
const fs = require('fs');

// new /* app */().initialize/*app */();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");
const generateHTML = require("");


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
      message: 'Insert your email.',
    },
    {
      type: 'checkbox',
      name: 'role',
      message: 'Please select the license(s) used from the following list.',
      choices: ['Mannager', 'Engineer', 'Intern'],      
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
        validate: gihthub => {
          if (github) {
            return true;
          } else {
            console.log("Please provide a github account username.");
            return false;
          }
        }
      },
    ];
    const promptIntern
    = [
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
    
    .then()
    
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName),data);
    }
    
    // TODO: Create a function to initialize app
    //data is user responses
    function init() {
      inquirer
      .prompt(promptUser)
      .then(data => {
        console.log('generateREADME');
        writeToFile("README.md", generateMarkdown(data));
      })      
}

// Function call to initialize app
init();




