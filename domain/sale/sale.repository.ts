import { RepositoryInterface } from "../repository.interface";

export interface SaleRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{}