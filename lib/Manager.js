employee = require("Employee");

function engineer(data) {
  var managerData = {
    title: "Manager"
    ...data 
  };
  return employee.employee(managerData);
}