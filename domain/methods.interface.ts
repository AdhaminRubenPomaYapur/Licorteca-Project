export interface GetEntity <TEntityId, TEntity> {
    getListEntity()                     : Promise<TEntity[] | undefined>;
    getEntityById(tEntityId: TEntityId) : Promise<TEntity | undefined>
}

export interface PostEntity <TEntityQuery, TEntity> {
    postEntity(tEntityQuery: TEntityQuery): Promise<TEntity | undefined>;
}

export interface PutEntity<TEntityId, TEntityQuery, TEntity> {
    putEntity(tEntityId: TEntityId, tEntityQuery: TEntityQuery): Promise<TEntity | undefined>;
}

export interface DeleteEntity<TEntityId, TEntity> {
    deleteEntity(tEntityId: TEntityId): Promise<TEntity | undefined>;
}