import { DeleteEntity, GetEntity, PostEntity, PutEntity } from "./methods.interface";

export interface RepositoryInterface<TEntityId, TEntityQuery, TEntity> extends 
    GetEntity    <TEntityId,    TEntity>,
    PostEntity   <TEntityQuery, TEntity>,
    PutEntity    <TEntityId,    TEntityQuery, TEntity>,
    DeleteEntity <TEntityId,    TEntity>
{}