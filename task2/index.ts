import { Salary } from "./api/interface";

/*
### **Assignment 2: Employee Salary Management**

**Concepts**: Objects, Array Methods, Object Methods, Functions

### **Problem Description**:

You are building a **salary management system** for a company. Each employee is represented as an object with the following properties: `id`, `name`, `position`, `salary`, and `department`. The tasks you need to implement:

1. **Add a new employee** to the system.
2. **Increase the salary** of an employee by `id` based on a percentage.
3. **Find all employees** within a specific department.
4. **Calculate the total salary** for all employees.
5. Implement a method in the employee object to **promote an employee** by increasing their salary by a fixed percentage.

*/

let salaryManagementSystem: Salary[] = [
  {
    id: 1,
    name: "Ali Ahmed",
    position: "Software Engineer",
    salary: 7000,
    department: "Development",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
  {
    id: 2,
    name: "Mona Ibrahim",
    position: "Project Manager",
    salary: 9000,
    department: "Management",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
  {
    id: 3,
    name: "Khaled Hussein",
    position: "UI/UX Designer",
    salary: 6000,
    department: "Design",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
  {
    id: 4,
    name: "Sara Youssef",
    position: "Data Analyst",
    salary: 7500,
    department: "Analytics",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
  {
    id: 5,
    name: "Ahmed Tamer",
    position: "Marketing Specialist",
    salary: 6500,
    department: "Marketing",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
  {
    id: 6,
    name: "Omar Amr",
    position: "Marketing Specialist",
    salary: 6500,
    department: "Marketing",
    fixedPercentage() {
      this.salary *= (100 + 50) / 100;
    },
  },
];

//Add a new employee to the system.

salaryManagementSystem.push({
  id: 7,
  name: "Omar Fathy",
  position: "Backend Developer",
  salary: 8000,
  department: "Development",
  fixedPercentage() {
    this.salary *= (100 + 50) / 100;
  },
});

//Increase the salary of an employee by id based on a percentage.

function IncreaseTheSalary(id: number, percentage: number): void {
  const updatedSalary = salaryManagementSystem.find((el) => el.id === id);
  if (updatedSalary) {
    updatedSalary.salary *= (100 + percentage) / 100;
  } else {
    console.log("employee not found");
  }
}

//Find all employees within a specific department.
function specificDepartment(department: string): Salary[] {
  const requiredEmployee = salaryManagementSystem.filter(
    (el) => el.department === department
  );
  if (requiredEmployee.length === 0) {
    console.log(`No employees found in ${department}`);
  }
  return requiredEmployee;
}

//Calculate the total salary for all employees.
function calculateTheTotalSalary(): number {
  return salaryManagementSystem.reduce((acc, curr) => curr.salary + acc, 0);
}

//Implement a method in the employee object to promote an employee by increasing their salary by a fixed percentage
salaryManagementSystem[0].fixedPercentage();
console.log(salaryManagementSystem[0]);
