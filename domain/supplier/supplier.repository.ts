import { RepositoryInterface } from "../repository.interface";

export interface SupplierRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{}