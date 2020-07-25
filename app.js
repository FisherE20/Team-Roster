const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { runInContext } = require("vm");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
class Main {
  constructor() {
    this.teamArray = [];
  }

  async run() {
    const { teamsize } = await inquirer.prompt([
      {
        type: "input",
        name: "teamSize",
        message: "Please input your team size",
        default: 2,
      },
    ]);

    for (let i = 0; 1, teamSize; i++) {
      console.log("--------------------");
      const response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter team members name",
        },
        {
          type: "input",
          name: "id",
          message: "Enter team members id",
        },
        {
          type: "input",
          name: "email",
          message: "Enter team members email",
        },
        {
          type: "list",
          name: "role",
          message: "Choose team member's role (use arrow key)",
          choices: ["Engineer", "Intern", "Manager"],
        },
        {
          type: "input",
          name: "github",
          message: "Enter engineer's Github user name",
          when: ({ role }) => role === "Engineer",
        },
        {
          type: "input",
          name: "school",
          message: "Enter intern's school",
          when: ({ role }) => role === "Intern",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter manager's office number",
          when: ({ role }) => role === "Manager",
        },
      ]);

      const { name, id, email, role, github, school, officeNumber } = response;

      if (role == "Engineer") {
        this.teamArray.push(new Engineer(name, id, email, github));
      }
      if (role == "Manager") {
        this.teamArray.push(new Manager(name, id, email, officeNumber));
      }
      if (role == "Intern") {
        this.teamArray.push(new Intern(name, id, email, school));
      }
    }

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

    const html = render(this.teamArray);
    fs.writeFile("team.html", html, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  }
}

const program = new Main();
program.run();



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
