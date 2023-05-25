import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { SupplierService } from "../../../application/supplier/supplier.service";


export class SupplierController implements InterfaceCrud {

    constructor( private readonly supplierService: SupplierService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const suppliers = await this.supplierService.getListEntity();
        res.json({suppliers})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const supplier  = await this.supplierService.getEntityById(id);
        res.json({supplier});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { supplier } = req.body;
        const supplierNew = await this.supplierService.postEntity(supplier);
        res.json({supplier: supplierNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { supplier } = req.body;
        const supplierNew = await this.supplierService.putEntity(id, supplier);
        res.json({supplier: supplierNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const supplier = await this.supplierService.deleteEntity(id);
        res.json({supplier});
    }
}