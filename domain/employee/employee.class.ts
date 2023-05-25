import { EmployeeInterface } from "./employee.interface";


export class Employee implements EmployeeInterface {

    public id?        : string;
    public name?      : string;
    public lastname?  : string;
    public email?     : string;
    public password?  : string;
    public birthdate? : string;
    public cellphone? : string;
    public state?     : boolean;
    public created?   : string;

    constructor({});
    constructor({name, lastname, email, password, cellphone}: EmployeeInterface) {
        this.name      = name;
        this.lastname  = lastname;
        this.email     = email;
        this.password  = password;
        this.cellphone = cellphone;
        this.birthdate = 'No filled';
        this.state     = true;
        this.created   = `${new Date()}`
    }

    static getEmployees(object: any[]): Employee[]{
        let employees: Employee[] = new Array<Employee>();
        object.forEach(employee => {
            const employeeBase = new Employee({})
            employeeBase.id        = `${employee._id.toString()}`;
            employeeBase.name      = employee.name;
            employeeBase.lastname  = employee.lastname;
            employeeBase.email     = employee.email;
            employeeBase.password  = employee.password;
            employeeBase.birthdate = employee.birthdate;
            employeeBase.cellphone = employee.cellphone;
            employeeBase.state     = employee.state;
            employeeBase.created   = employee.created;
            employees.push(employeeBase);
        })
        return employees;
    }

    static getEmployeeById(object: any): Employee {
        const employee = new Employee({});
        employee.id        = `${object._id.toString()}`;
        employee.name      = object.name;
        employee.lastname  = object.lastname;
        employee.email     = object.email;
        employee.password  = object.password;
        employee.birthdate = object.birthdate;
        employee.cellphone = object.cellphone;
        employee.state     = object.state;
        employee.created   = object.created;
        return employee;
    }

}