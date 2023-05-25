import { RepositoryInterface } from "../repository.interface";
import { ProductCatalog } from "./catalog.interface";

export interface CatalogRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{
    getProductById(tEntityId: TEntityId)                          : Promise<TEntity | undefined>;
    addProduct(tEntityId: TEntityId, tEntityQuery: ProductCatalog): Promise<TEntity | undefined>;
    getCatalogsBySupplier(tEntityId: TEntityId)                   : Promise<TEntity[] | undefined>;
}