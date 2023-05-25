import { RepositoryInterface } from "../repository.interface";

export interface ClientRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{}