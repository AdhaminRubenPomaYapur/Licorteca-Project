import { ServiceInterface } from "../service.interface";

export interface InventoryInterfaceService<TEntityId, TEntityQuery, TEntity> extends 
    ServiceInterface<TEntityId, TEntityQuery, TEntity>
{
    addProductId(tEntityId: TEntityId, tEntityQuery: string): Promise<TEntity | undefined>;
    updateStock(tEntityId: TEntityId)                       : Promise<TEntity | undefined>;
}