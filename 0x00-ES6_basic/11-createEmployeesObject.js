export default function createEmployeesObject(departmentName, employees) {
  const employeesobj = {
    [departmentName]: [...employees],
  };

  return employeesobj;
}
