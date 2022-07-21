class Employee {
  constructor(name, title, id, email, lastPart) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email;
    this.lastPart = lastPart;
  }

  getRole() {
    return "Employee";
  }

  render() {
    return `
      <div class="col-4 shadow-sm p-3 bg-body rounded customCard">
          <div class="customTitle">
            <h3>${this.name}</h3>
            <h4>${this.title}</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${this.email}">${this.email}</a>
            </li>
            <li class="list-group-item">${this.lastPart}</li>
          </ul>
        </div>`;
  }
}

module.exports = Employee;
