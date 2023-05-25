import { Employee } from "../../domain/employee/employee.class";
import { EmployeeInterface } from "../../domain/employee/employee.interface";
import { EmployeeRepository } from "../../domain/employee/employee.repository";
import { EmployeeInterfaceService } from "./employee.interface";


export class EmployeeService implements EmployeeInterfaceService<string, EmployeeInterface, Employee> {

    constructor( private readonly employeeRepository: EmployeeRepository<string, EmployeeInterface, Employee> ) {}

    public getListEntity = async (): Promise<Employee[] | undefined> => {
        return await this.employeeRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Employee | undefined> => {
        return await this.employeeRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: EmployeeInterface): Promise<Employee | undefined> => {
        return await this.employeeRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: EmployeeInterface): Promise<Employee | undefined> => {
        return await this.employeeRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Employee | undefined> => {
        return await this.employeeRepository.deleteEntity(tEntityId);
    }

}