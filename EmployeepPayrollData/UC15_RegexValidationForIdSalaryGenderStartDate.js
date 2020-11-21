//UC 12,13 Ability to create Employee Payroll Data with id, name and salary

class EmployeePayrollData 
{
    // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...params) 
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    } 
    //UC 14 refactor
    get name() { return this._name; }
    set name(name) 
    {
        let nameRegExp = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegExp.test(name))
            this._name = name;
        else throw 'Incorrect name format!';
    }
     //UC 15 refactor
     get id(){return this._id;}
     set id(id)
     {
         if (id > 0)
             this._id = id;
         else throw 'Id must be non zero, positive!';
     }
 
     get salary(){return this._salary;}
     set salary(salary)
     {
         if (salary > 0)
             this._salary = salary;
         else throw 'Salary must be non zero, positive!';
     }
 
     get gender(){return this._gender;}
     set gender(gender)
     {
         let genderRegExp = RegExp('^[M,F]{1}$');
         if (genderRegExp.test(gender))
             this._gender = gender;
         else throw 'Invalid gender';
     }
 
     get startDate(){return this._startDate;}
     set startDate(startDate)
     {
         if (startDate <= new Date())
             this._startDate = startDate;
         else throw 'Invalid date entered';
     }

    // overriding toString() method 
    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id=" + this.id + ", Name=" + this.name + ", Salary=" + this.salary + ", Gender=" + this.gender + ", StartDate=" + empDate;
    }
}
//Other two fields will be undefined when not initialised in constructor
let employeePayrollData = new EmployeePayrollData(1,"Mark",60000);
console.log("UC13\nClass contents:\n" + employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());  
let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 50000, 'F', new Date());
console.log(newEmployeePayrollData.toString()); 
// UC14 Regex check for the name of employee
try 
{
    employeePayrollData.name = "John";
}
catch (e) 
{
    console.error(e);
}
//UC 15 : Validation for id,salary,gender,startDate
try
{
    employeePayrollData.id = 4;
    employeePayrollData.salary = 2000;
    employeePayrollData.gender = 'M'; 
    employeePayrollData.startDate = new Date("13 Sep 2020");
}
catch(e)
{
    console.error(e);
}
console.log(employeePayrollData.toString());