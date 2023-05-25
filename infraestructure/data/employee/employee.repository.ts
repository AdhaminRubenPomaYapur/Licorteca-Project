import { Model } from "mongoose";
import { EmployeeRepository } from "../../../domain/employee/employee.repository";
import { EmployeeInterface } from "../../../domain/employee/employee.interface";
import { Employee } from "../../../domain/employee/employee.class";

export class RepositoryEmployee implements EmployeeRepository<string, EmployeeInterface, Employee> {

    constructor( private readonly modelEmployee: Model<EmployeeInterface> ) {}

    public getListEntity = async (): Promise<Employee[] | undefined> => {
        const employeeDB = (await this.modelEmployee.find()).filter(c => c.state);
        const employees   = Employee.getEmployees(employeeDB);
        return employees;
    }
    public getEntityById = async (tEntityId: string): Promise<Employee | undefined> => {
        const employeeDB = await this.modelEmployee.findById(tEntityId);
        const employee   = Employee.getEmployeeById(employeeDB);
        return employee;
    }
    public postEntity = async (tEntityQuery: EmployeeInterface): Promise<Employee | undefined> => {
        const employee = new Employee(tEntityQuery);
        const employeeDB = await this.modelEmployee.create(employee);
        return Employee.getEmployeeById(employeeDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: EmployeeInterface): Promise<Employee | undefined> => {
        const employeeDB = await this.modelEmployee.findByIdAndUpdate(tEntityId, tEntityQuery, { new: true });
        const employee = Employee.getEmployeeById(employeeDB);
        return employee;
    }
    public deleteEntity = async (tEntityId: string): Promise<Employee | undefined> => {
        const employeeDB = await this.modelEmployee.findByIdAndUpdate(tEntityId, { state: false }, { new: true });
        const employee = Employee.getEmployeeById(employeeDB);
        return employee;
    }

}