const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Has the role of engineer", () => {
    const engineer = new Engineer("Jared", "10", "jared@email.com", "/jared");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
