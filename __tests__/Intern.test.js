const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Has the role of Intern", () => {
    const intern = new Intern("Mara", "3", "mara@email.com", "UT");
    expect(intern.getRole()).toBe("Intern");
  });
});
