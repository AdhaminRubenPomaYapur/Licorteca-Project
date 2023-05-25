import { Catalog } from "../../domain/catalog/catalog.class";
import { CatalogInterface, ProductCatalog } from "../../domain/catalog/catalog.interface";
import { CatalogRepository } from "../../domain/catalog/catalog.repository";
import { CatalogInterfaceService } from "./catalog.interface";

export class CatalogService implements CatalogInterfaceService<string, CatalogInterface, Catalog> {

    constructor( private readonly catalogRepository: CatalogRepository<string, CatalogInterface, Catalog> ) {}

    public getCatalogsBySupplier = async (tEntityId: string): Promise<Catalog[] | undefined> => {
        return await this.catalogRepository.getCatalogsBySupplier(tEntityId);
    }
    public getProductById = async (tEntityId: string): Promise<Catalog | undefined> => {
        return await this.catalogRepository.getProductById(tEntityId);
    }
    public addProduct = async (tEntityId: string, tEntityQuery: ProductCatalog): Promise<Catalog | undefined> => {
        return await this.catalogRepository.addProduct(tEntityId, tEntityQuery);
    }
    public getListEntity = async (): Promise<Catalog[] | undefined> => {
        return await this.catalogRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Catalog | undefined> => {
        return await this.catalogRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: CatalogInterface): Promise<Catalog | undefined> => {
        return await this.catalogRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: CatalogInterface): Promise<Catalog | undefined> => {
        return await this.catalogRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Catalog | undefined> => {
        return await this.catalogRepository.deleteEntity(tEntityId);
    }

}