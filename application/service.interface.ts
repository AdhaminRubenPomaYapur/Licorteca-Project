import { DeleteEntity, GetEntity, PostEntity, PutEntity } from "../domain/methods.interface";

export interface ServiceInterface<TEntityId, TEntityQuery, TEntity> extends
    GetEntity    <TEntityId,    TEntity>,
    PostEntity   <TEntityQuery, TEntity>,
    PutEntity    <TEntityId,    TEntityQuery, TEntity>,
    DeleteEntity <TEntityId,    TEntity>
{}