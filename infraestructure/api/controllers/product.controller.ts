import { Request, Response } from "express";
import { ProductService } from "../../../application/product/product.service";
import { InterfaceCrud } from "../interfaces/interface.crud";

export class ProductController implements InterfaceCrud {

    constructor( private readonly productService: ProductService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const products = await this.productService.getListEntity();
        res.json({products})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const product  = await this.productService.getEntityById(id);
        res.json({product});
    }
    // public GETBYID = async (req: Request, res: Response): Promise<void> => {
    //     const { id } = req.params;
    //     const product  = await this.productService.getProductCatalogId(id);
    //     res.json({product});
    // }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { product } = req.body;
        const productNew = await this.productService.postEntity(product);
        res.json({product: productNew});
    }
    public POSTADDPRODUCTID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { product_id } = req.body;
        const productNew = await this.productService.addProductCatalogId(id, product_id);
        res.json({product: productNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { product } = req.body;
        const productNew = await this.productService.putEntity(id, product);
        res.json({product: productNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const product = await this.productService.deleteEntity(id);
        res.json({product});
    }
}