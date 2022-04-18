const inquirer = require('inquirer');
const fs = require('fs');

// new /* app */().initialize/*app */();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");
const { assertNewExpression } = require('@babel/types');
// const generateHTML = require("");


const promptUser = [
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
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number of the manager?',
      when: (choices) => choices.role === 'Manager',
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please provide the manager's office number.");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "github",
        message:"What is the employee's github username?",
        when: (choices) => choices.role === 'Engineer',
        validate: github => {
          if (github) {
            return true;
          } else {
            console.log("Please provide a github account username.");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "school",
        message: "What is the name of the intern's school?",
        when: (choices) => choices.role === 'Intern',
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log("Please provide the intern's school name.");
            return false;
          }
        }
      }
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
    
    
    // function choice () {
    // }
    
    function init() {
      inquirer
      .prompt(promptUser)
      .then(data => {
        if (choice.role === 'Manager') {
          console.log('it works!');
        }
        //     (choice.role === 'Engineer') {
      //     }
      //     (choice.role === 'Intern') {
      //     }
         
      })
    };
         // writeToFile("README.md", generateMarkdown(data));
   
    
    //  const writeToFile(fileName, data) {
    //    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
    //  }
    
    init();
    


    



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