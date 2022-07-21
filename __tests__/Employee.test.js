const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Has a new employee", () => {
    const employee = new Employee(
      "Carlos",
      "🎓 Intern",
      "30",
      "calos@email.com"
    );
    expect(employee.getRole()).toBe("Employee");
  });
});
