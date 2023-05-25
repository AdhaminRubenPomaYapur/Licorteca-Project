import { ServiceInterface } from "../service.interface";

export interface ClientInterfaceService<TEntityId, TEntityQuery, TEntity> extends 
    ServiceInterface<TEntityId, TEntityQuery, TEntity>
{}