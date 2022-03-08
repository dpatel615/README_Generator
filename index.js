// require modulles 
const fs = require('fs');
const inquirer = require('inquirer');

// linking to page where the README is developed
const pageGenerate = require('./utils/generateMarkdown.js');

// Array of questions for user 
const question = () => {
    // using inquirer to prompt the question to user
    return inquirer.prompt ([
       {
           type: 'input',
           name: 'github',
           message: 'what is your Github username? ',
           validate: nameInput => {
               if(nameInput){
                   return true;
               } 
               else {
                   console.log('please enter github username');
                   return false;
               }
           }
       },
       {
           type: 'input',
           name: 'email',
           message: 'what is your email?',
           validate: nameInput => {
               if(nameInput){
                   return true;
               }
               else {
                   console.log('please enter your Email !');
                   return false;
               }
           } 
       },
       {
        type: 'input',
        name: 'title',
        message: 'what is your project name?',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else {
                console.log('please enter your project name !');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a description of your project. ',
        
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else {
                console.log('please write a description of your project !');
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license should you project have?',
        choice: ['MIT', 'GNU'],
        default:["MIT"],
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else {
                console.log('please choose your license !');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'install',
        message: 'what are the steps required to install your project?',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else {
                console.log('please enter steps required to install your project!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else {
                console.log('please enter a usage description!');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to run tests?',
        default: 'npm test'
    },  
    {
    type: 'input',
    name: 'contributors',
    message: 'what does the user to know about contributing to the repo?'
    }

    ]);
};

// function to write README file using file system
const readmeFile = data => {
    fs.readmeFile('README.md', data, err => {
        // if there is error
        if(err){
            console.log(err);
            return;
        }
        else {
            console.log("Your README has been successfully created!")
        }
    })
};
question()
// Getting user Answers
.then(answer => {
    return pageGenerate(answer);
})
// using data to display on page
.then(data => {
    return readmeFile(data);
})
// catching ERROR
.catch(err => {
    console.log(err)
})