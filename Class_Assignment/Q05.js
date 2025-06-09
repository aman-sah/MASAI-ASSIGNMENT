function transformEmployees(employees, salaryThreshold) {
  return employees
    .filter(emp => emp.salary > salaryThreshold)
    .map(emp => ({
      name: emp.name,
      newSalary: Math.round(emp.salary * 1.10),
      experience: emp.experience
    }))
    .sort((a, b) => b.experience - a.experience);
}

const employees = [
  { id: 1, name: "Alice", salary: 50000, experience: 3, department: "Engineering" },
  { id: 2, name: "Bob", salary: 75000, experience: 5, department: "Sales" },
  { id: 3, name: "Charlie", salary: 60000, experience: 2, department: "Marketing" },
  { id: 4, name: "Dave", salary: 45000, experience: 1, department: "Engineering" },
  { id: 5, name: "Eve", salary: 85000, experience: 7, department: "Engineering" }
];

const result = transformEmployees(employees, 55000);
console.log(result);
