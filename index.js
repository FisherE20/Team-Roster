const inquirer = require ("inquirer");
const fs = require ("fs");
const main = require("./Develop/templates/main")

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is your employee id number?"   
    },

    {
        type:"input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type:"input",
        name:"role",
        message:"What is your role within the company",
    },

    {
        type:"input",
        name:"officeNumber",
        message:"What is your office number?"
    },

    {
        type:"input",
        name:"gitHub",
        message:"What is your GitHub username?"
    },

    {
        type: "input",
        name:"school",
        message:"What school did you attend?"
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            throw err;
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(data);

        const response = main(data);
        console.log(data);

    
    


    fs.writeFile('main.html', response, (err) =>{
        if(err){
            console.log(err);
        }else {
            console.log("You have sucessfully logged your responses");
        }
        
    })
})
}

//function call to initialize program
init();
