const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, "☕ Manager", id, email, `Office number: ${office}`);
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
