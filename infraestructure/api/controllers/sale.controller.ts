import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { SaleService } from "../../../application/sale/sale.service";


export class SaleController implements InterfaceCrud {

    constructor( private readonly saleService: SaleService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const sales = await this.saleService.getListEntity();
        res.json({sales})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const sale  = await this.saleService.getEntityById(id);
        res.json({sale});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { sale } = req.body;
        const saleNew = await this.saleService.postEntity(sale);
        res.json({sale: saleNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { sale } = req.body;
        const saleNew = await this.saleService.putEntity(id, sale);
        res.json({sale: saleNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const sale = await this.saleService.deleteEntity(id);
        res.json({sale});
    }
}