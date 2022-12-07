// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmpl = { ...employee };
    newEmpl[key] = value;
    return newEmpl
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmpl = { ...employee };
  delete  newEmpl[key];
  return newEmpl
}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
   
  delete  employee[key];
  return employee
}
