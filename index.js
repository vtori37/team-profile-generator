const inquirer = require('inquirer');
const fs = require('fs');

// new /* app */().initialize/*app */();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");
const { assertNewExpression } = require('@babel/types');
// const generateHTML = require("");

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
    // console.log('');
    if (data.role[0] === 'Manager') {
      promptManager(data);
    }
    if (data.role[0] === 'Engineer') {
        promptEngineer(data);
    }
    if (data.role[0] === 'Intern') {
        promptIntern(data);
    }
    })
  }

  function newEmployee () {
    return inquirer.prompt([
    {
      type: "",
      name: "",
      message: "",
      choices:['Yes', "No"]
    }
    ])
  }

//give user option to create as many employee profiles as they want and then once created, 
// an option to create the team that will be on the html
    

    function promptManager (data) {
      return inquirer.prompt([
      {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the office number of the manager?',
          // validate: officeNumber => {
          //   if (officeNumber) {
          //     return true;
          //   } else {
          //     console.log("Please provide the manager's office number.");
          //     return false;
          //   }
          // }
        },
      ]);
    }
  
      function promptEngineer (data) {
        return inquirer.prompt([
        {
          type: 'input',
          name: "github",
          message:"What is the employee's github username?",
          // validate: github => {
          //   if (github) {
          //     return true;
          //   } else {
          //     console.log("Please provide a github account username.");
          //     return false;
          //   }
          // }
        },
      ]);
    }
      
      function promptIntern (data) {
        return inquirer.prompt([
        {
          type: 'input',
          name: "school",
          message: "What is the name of the intern's school?",
          // validate: school => {
          //   if (school) {
          //     return true;
          //   } else {
          //     console.log("Please provide the intern's school name.");
          //     return false;
          //   }
          // }
        },
      ]);
      }
    
   
  promptUser();


    



    // function promptUser() {
    //   return inquirer.prompt([
    //     {
    //       type: "input",
    //       name: "name",
    //       message: "What is the employee's name?"
    //     },
    //     {
    //       type: "input",
    //       name: "id",
    //       message: "What is the employee's ID?"
    //     },
    //     {
    //       type: 'input',
    //       name: 'email',
    //       message: "Please insert the employee's email.",
    //     },
    //     {
    //       type: 'checkbox',
    //       name: 'role',
    //       message: 'Please choose the role of the Employee.',
    //       choices: ['Manager', 'Engineer', 'Intern'],      
    //     },
    //   ])
    //   .then(function(data) {
    //     console.log('');
    //     if (data.role === 'Manager') {
    //       promptManager(data);
    //     }
    //       if (data.role === 'Engineer') {
    //         promptEngineer(data);
    //       }
    //       if (data.role === 'Intern') {
    //         promptIntern(data);
    //       }
    //     })
    //   }