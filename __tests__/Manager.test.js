const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Has the role of Manager", () => {
    const employee = new Manager("Lara", "1", "lara@email.com", "20");
    expect(employee.getRole()).toBe("Manager");
  });
});
