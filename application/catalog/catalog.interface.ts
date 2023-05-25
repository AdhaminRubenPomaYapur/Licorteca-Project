import { ProductCatalog } from "../../domain/catalog/catalog.interface";
import { ServiceInterface } from "../service.interface";

export interface CatalogInterfaceService<TEntityId, TEntityQuery, TEntity> extends 
    ServiceInterface<TEntityId, TEntityQuery, TEntity>
{
    getProductById(tEntityId: TEntityId)                          : Promise<TEntity | undefined>;
    addProduct(tEntityId: TEntityId, tEntityQuery: ProductCatalog): Promise<TEntity | undefined>;
    getCatalogsBySupplier(tEntityId: TEntityId)                   : Promise<TEntity[] | undefined>;
}