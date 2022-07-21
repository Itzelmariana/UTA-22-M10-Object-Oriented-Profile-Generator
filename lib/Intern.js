const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, "🎓 Intern", id, email, `School: ${school}`);
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
