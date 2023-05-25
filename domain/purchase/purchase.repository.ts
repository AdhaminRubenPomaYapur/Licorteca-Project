import { RepositoryInterface } from "../repository.interface";

export interface PurchaseRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{}