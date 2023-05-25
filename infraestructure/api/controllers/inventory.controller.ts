import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { InventoryService } from "../../../application/inventory/inventory.service";

export class InventoryController implements InterfaceCrud {

    constructor( 
        private readonly inventoryService: InventoryService
    ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const inventories = await this.inventoryService.getListEntity();
        res.json({inventories})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const inventory  = await this.inventoryService.getEntityById(id);
        res.json({inventory});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { inventory } = req.body;
        const inventoryNew = await this.inventoryService.postEntity(inventory);
        res.json({inventory: inventoryNew});
    }
    public POSTADDPRODUCT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { product_id } = req.body;
        let inventoryNew = await this.inventoryService.addProductId(id, product_id);
        inventoryNew = await this.inventoryService.updateStock(id);
        res.json({inventory: inventoryNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { inventory } = req.body;
        const inventoryNew = await this.inventoryService.putEntity(id, inventory);
        res.json({inventory: inventoryNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const inventory = await this.inventoryService.deleteEntity(id);
        res.json({inventory});
    }
}