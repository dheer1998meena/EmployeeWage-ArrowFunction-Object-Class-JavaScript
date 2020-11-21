//UC12 Ability to create Employee Payroll Data with id, name and salary
class EmployeePayrollData
{
    //fields
    id; 
    name;
    salary;
    //Parameterised constructor to initialise the data instances with value passed
    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // overriding toString() method
    toString()
    {
        return "Id= " + this.id + ", Name= " + this.name + ", Salary= " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",60000);
console.log("UC12\nClass contents:\n" + employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());  

