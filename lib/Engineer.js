const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, email, github) {
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

const engineer = new Engineer();

// function engineer(data) {
//   var engineerData = {
//     title: "Engineer"
//     ...data
//   };
//   return employee.employee(engineerData);
// }
