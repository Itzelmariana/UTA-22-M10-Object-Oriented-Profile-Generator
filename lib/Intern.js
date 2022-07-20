const Employee = require('./Employee')

class Intern extends Employee{
  constructor(id, email, github){
    this.id = id;
    this.email = email;
    this.github = github;
  }
} 

const intern = new Intern()

function engineer(data) {
  var internData = {
    title: "Intern"
    ...data 
  };
  return employee.employee(internData);
}