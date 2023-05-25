import { Model } from 'mongoose';
import { Product } from '../../../domain/product/product.class';
import { ProductInterface } from '../../../domain/product/product.interface';
import { ProductRepository } from '../../../domain/product/product.repository';
export class RepositoryProduct implements ProductRepository<string, ProductInterface, Product> {

    constructor( private readonly modelProduct: Model<ProductInterface> ) {}

    public getProductCatalogId = async (tEntityId: string): Promise<Product | undefined> => {
        const products = await this.modelProduct.find();
        const product  = Product.getProductByIdProductCatalog(tEntityId, products!);
        return product;
    }
    public addProductCatalogId = async (tEntityId: string, tEntityQuery: string): Promise<Product | undefined> => {
        const product = await this.getEntityById(tEntityId);
        if( !product?.existsProductByCatalogId(tEntityQuery) ) {
            product!.addProductIds(tEntityQuery);
        }
        const productUpdated = await this.putEntity(tEntityId, product!);
        return productUpdated;
    }
    public getListEntity = async (): Promise<Product[] | undefined> => {
        const productsDB = (await this.modelProduct.find()).filter(p => p.state);
        const product    = Product.getProducts(productsDB);
        return product;
    }
    public getEntityById = async (tEntityId: string): Promise<Product | undefined> => {
        const productDB  = await this.modelProduct.findById(tEntityId);
        const product    = Product.getProductById(productDB);
        if( !product.state ) return undefined;
        return product;
    }
    public postEntity = async (tEntityQuery: ProductInterface): Promise<Product | undefined> => {
        const product    = new Product(tEntityQuery);
        const productDB  = await this.modelProduct.create(product);
        return Product.getProductById(productDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: ProductInterface): Promise<Product | undefined> => {
        const productDB = await this.modelProduct.findByIdAndUpdate(tEntityId, tEntityQuery, { new: true });
        const product   = Product.getProductById(productDB);
        return product;
    }
    public deleteEntity = async (tEntityId: string): Promise<Product | undefined> => {
        const productDB = await this.modelProduct.findByIdAndUpdate(tEntityId, { state: false }, { new: true });
        const product   = Product.getProductById(productDB);
        return product;
    }
    
}