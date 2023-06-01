import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { CatalogService } from "../../../application/catalog/catalog.service";


export class CatalogController implements InterfaceCrud {

    constructor( private readonly catalogService: CatalogService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const catalogs = await this.catalogService.getListEntity();
        res.json({catalogs})
    }
    public GETCATALOGSBYIDSUPPLIER = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const catalogs  = await this.catalogService.getCatalogsBySupplier(id);
        res.json({catalogs});
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const catalog  = await this.catalogService.getEntityById(id);
        res.json({catalog});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { catalog } = req.body;
        const catalogNew = await this.catalogService.postEntity(catalog);
        res.json({catalog: catalogNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { catalog } = req.body;
        const catalogNew = await this.catalogService.putEntity(id, catalog);
        res.json({catalog: catalogNew});
    }
    public POSTADDPRODUCT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { product } = req.body;
        const catalogNew = await this.catalogService.addProduct(id, product);
        res.json({catalog: catalogNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const catalog = await this.catalogService.deleteEntity(id);
        res.json({catalog});
    }
}