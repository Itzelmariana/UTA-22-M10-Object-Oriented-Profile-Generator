const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

function renderHTML(employees) {
  var html = "";

  for (var i = 0; i < employees.length; i++) {
    html += employees[i].render();
  }
  return html;
}
// TODO: Create an array of questions for user input
const promptUser = () => {
  /*
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "1. What is your project title?",
    },
  ]);
  */

  promptForNumberOfManagers()
    .then(promptForManager)
    .then(promptForNumberOfInterns)
    .then(prompteForIntern)
    .then(promptForNumberOfEngineers)
    .then(promptForEngineer)
    .then(renderHtml);
};

function promptForManager() {}

function promptForEngineer() {}

function prompteForIntern() {}

function promptForNumberOfManagers(numManagers) {}

function promptForNumberOfEngineers() {}

function promptForNumberOfInterns() {}

function init() {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeToFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}

init();
