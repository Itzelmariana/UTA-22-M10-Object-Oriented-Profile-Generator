const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(
      name,
      "👓 Engineer",
      id,
      email,
      `Github
              <a href="https://github.com/${github}" target="_blank"
                >${github}</a>`
    );
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
