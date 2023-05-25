import { RepositoryInterface } from "../repository.interface";

export interface ProductRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{
    addProductCatalogId(tEntityId: TEntityId, tEntityQuery: string): Promise<TEntity | undefined>;
    getProductCatalogId(tEntityId: TEntityId): Promise<TEntity | undefined>;
}