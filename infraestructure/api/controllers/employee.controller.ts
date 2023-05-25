import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { EmployeeService } from "../../../application/employee/employee.service";

export class EmployeeController implements InterfaceCrud {

    constructor( private readonly employeeService: EmployeeService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const employees = await this.employeeService.getListEntity();
        res.json({employees})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const employee  = await this.employeeService.getEntityById(id);
        res.json({employee});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { employee } = req.body;
        const employeeNew = await this.employeeService.postEntity(employee);
        res.json({employee: employeeNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { employee } = req.body;
        const employeeNew = await this.employeeService.putEntity(id, employee);
        res.json({employee: employeeNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const employee = await this.employeeService.deleteEntity(id);
        res.json({employee});
    }
}