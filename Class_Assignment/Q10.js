function searchEmployees(employees, query) {
  const lowerQuery = query.toLowerCase();

  return employees
    .filter(emp =>
      emp.name.toLowerCase().includes(lowerQuery) ||
      emp.department.toLowerCase().includes(lowerQuery)
    )
    .sort((a, b) => a.id - b.id);
}


const employees = [
  { id: 101, name: "Alice Johnson", department: "Engineering" },
  { id: 102, name: "Bob Martin", department: "Marketing" },
  { id: 103, name: "Clara Evans", department: "Engineering" },
  { id: 104, name: "Daniel Ray", department: "HR" },
  { id: 105, name: "Eve Carter", department: "Marketing" }
];

const query = "engineer";

const result = searchEmployees(employees, query);
console.log(result);
