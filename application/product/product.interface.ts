import { ServiceInterface } from "../service.interface";

export interface ProductInterfaceService<TEntityId, TEntityQuery, TEntity> extends 
    ServiceInterface<TEntityId, TEntityQuery, TEntity>
{
    addProductCatalogId(tEntityId: TEntityId, tEntityQuery: string): Promise<TEntity | undefined>;
    getProductCatalogId(tEntityId: TEntityId)                      : Promise<TEntity | undefined>;
}