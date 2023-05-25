import { Product } from "../../domain/product/product.class";
import { ProductInterface } from "../../domain/product/product.interface";
import { ProductRepository } from "../../domain/product/product.repository";
import { ProductInterfaceService } from "./product.interface";

export class ProductService implements ProductInterfaceService<string, ProductInterface, Product> {

    constructor( private readonly productRepository: ProductRepository<string, ProductInterface, Product> ) {}

    public addProductCatalogId = async (tEntityId: string, tEntityQuery: string): Promise<Product | undefined> => {
        return await this.productRepository.addProductCatalogId(tEntityId, tEntityQuery);
    }
    public getProductCatalogId = async (tEntityId: string): Promise<Product | undefined> => {
        return await this.productRepository.getProductCatalogId(tEntityId);
    }
    public getListEntity = async (): Promise<Product[] | undefined> => {
        return await this.productRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Product | undefined> => {
        return await this.productRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: ProductInterface): Promise<Product | undefined> => {
        return await this.productRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: ProductInterface): Promise<Product | undefined> => {
        return await this.productRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Product | undefined> => {
        return await this.productRepository.deleteEntity(tEntityId);
    }

}