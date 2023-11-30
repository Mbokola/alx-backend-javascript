export default function createReportObject(employeesList) {
  const allEmployeesobj = {
    allEmployees: { ...employeesList },

    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return allEmployeesobj;
}
