import { RepositoryInterface } from "../repository.interface";

export interface InventoryRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{
    addProductId(tEntityId: TEntityId, tEntityQuery: string): Promise<TEntity | undefined>;
    updateStock(tEntityId: TEntityId)                       : Promise<TEntity | undefined>;
}