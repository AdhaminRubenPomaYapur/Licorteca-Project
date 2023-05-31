import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { PurchaseService } from "../../../application/purchase/purchase.service";


export class PurchaseController implements InterfaceCrud {

    constructor( private readonly purchaseService: PurchaseService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const purchases = await this.purchaseService.getListEntity();
        res.json({purchases})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const purchase  = await this.purchaseService.getEntityById(id);
        res.json({purchase});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { purchase } = req.body;
        const purchaseNew = await this.purchaseService.postEntity(purchase);
        res.json({purchase: purchaseNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { purchase } = req.body;
        const purchaseNew = await this.purchaseService.putEntity(id, purchase);
        res.json({purchase: purchaseNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const purchase = await this.purchaseService.deleteEntity(id);
        res.json({purchase});
    }
}