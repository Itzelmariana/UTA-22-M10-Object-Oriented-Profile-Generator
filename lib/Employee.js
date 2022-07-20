class Employee {
  constructor(name, title, id, github) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.github = github;
  }

  render() {
    return `
      <div>
        <div>
          <p>${this.name}</p>
          <p>${this.title}</p>
        </div>
        <div>
          <ul>
            <li>${this.id}</li>
            <li>Email ${this.email}</li>
            <li>Github ${this.github}</li>
          </ul>
        </div>
      </div>`;
  }
}

module.exports = Employee;

jared = Employee("Jared", "Manager", 1, "jared@fakemail.com", null);
//alec = Employee("Alec", "Engineer", 1, "alec@fakemail.com", "ibealec");

jared.render();
//alec.render();
