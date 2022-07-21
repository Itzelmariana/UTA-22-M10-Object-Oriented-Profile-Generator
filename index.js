const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function renderHTML(employees) {
  var items = "";

  for (var i = 0; i < employees.length; i++) {
    items += employees[i].render();
  }

  var html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="src/styles.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>My Team</header>
    <div class="container customContainer">
      <div class="row">
      ${items}
      </div>
    </div>
  </body>
  </html>`;
  return html;
}

const promptUser = () => {
  return promptForTeamCounts().then(promptForTeamMembers);
};

async function promptForTeamMembers(data) {
  var numManagers = data.numManagers,
    numEngineers = data.numEngineers,
    numInterns = data.numInterns;

  var managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your manager's employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email",
    },
    {
      type: "input",
      name: "officeManager",
      message: "What is your manager's office number?",
    },
  ];
  var employees = [];
  for (var i = 0; i < numManagers; i++) {
    var employeeData = await inquirer.prompt(managerQuestions);
    employees.push(
      new Manager(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.officeManager
      )
    );
  }
  var engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the engineer?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of the engineer?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email of the engineer",
    },
    {
      type: "input",
      name: "github",
      message: "What is the github of the engineer?",
    },
  ];
  for (var i = 0; i < numEngineers; i++) {
    var employeeData = await inquirer.prompt(engineerQuestions);
    employees.push(
      new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.github
      )
    );
  }

  var internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the intern?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the ID of the intern?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email of the intern",
    },
    {
      type: "input",
      name: "school",
      message: "What is the school of the intern",
    },
  ];
  for (var i = 0; i < numInterns; i++) {
    var employeeData = await inquirer.prompt(internQuestions);
    employees.push(
      new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        employeeData.school
      )
    );
  }
  return employees;
}

function promptForTeamCounts() {
  return inquirer.prompt([
    {
      type: "number",
      name: "numManagers",
      message: "How many managers does your team have?",
    },
    {
      type: "number",
      name: "numEngineers",
      message: "How many engineers does your team have?",
    },
    {
      type: "number",
      name: "numInterns",
      message: "How many interns does your team have?",
    },
  ]);
}

function init() {
  promptUser()
    .then((answers) => fs.writeFileSync("index.html", renderHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}

init();
