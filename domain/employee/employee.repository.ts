import { RepositoryInterface } from "../repository.interface";

export interface EmployeeRepository<TEntityId, TEntityQuery, TEntity> extends 
    RepositoryInterface<TEntityId, TEntityQuery, TEntity>
{}