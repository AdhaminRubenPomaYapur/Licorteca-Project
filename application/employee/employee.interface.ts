import { ServiceInterface } from "../service.interface";

export interface EmployeeInterfaceService<TEntityId, TEntityQuery, TEntity> extends 
    ServiceInterface<TEntityId, TEntityQuery, TEntity>
{}