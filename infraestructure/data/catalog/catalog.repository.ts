import { Model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { CatalogRepository } from "../../../domain/catalog/catalog.repository";
import { CatalogInterface, ProductCatalog } from "../../../domain/catalog/catalog.interface";
import { Catalog } from "../../../domain/catalog/catalog.class";


export class RepositoryCatalog implements CatalogRepository<string, CatalogInterface, Catalog> {

    constructor( private readonly modelCatalog: Model<CatalogInterface> ) {}

    public getCatalogsBySupplier = async (tEntityId: string): Promise<Catalog[] | undefined> => {
        const catalogsDB  = await this.modelCatalog.find({supplier: tEntityId});
        const catalogs    = Catalog.getCatalogs(catalogsDB);
        return catalogs;
    }

    public getProductById = async (tEntityId: string): Promise<Catalog | undefined> => {
        const catalogs = await this.getListEntity();
        let catalogReturn;
        catalogs?.forEach(catalog => {
            catalogReturn = catalog.getProductById(tEntityId);
        })
        return catalogReturn;
    }

    public addProduct = async (tentityId: string, tEntityQuery: ProductCatalog): Promise<Catalog | undefined> => {
        const catalog = await this.getEntityById(tentityId);
        const product = new Map<string, string | number>();
        tEntityQuery.id = uuidv4();
        product.set('id',          tEntityQuery.id);
        product.set('name',        tEntityQuery.name);
        product.set('description', tEntityQuery.description);
        product.set('stock',       tEntityQuery.stock);
        product.set('price',       tEntityQuery.price);
        catalog?.addProducts(product);
        const catalogUpdate = this.putEntity(tentityId, catalog!);
        return catalogUpdate;
    }

    public getListEntity = async (): Promise<Catalog[] | undefined> => {
        const catalogsDB = (await this.modelCatalog.find()).filter(i => i.state);
        const catalog    = Catalog.getCatalogs(catalogsDB);
        return catalog;
    }
    public getEntityById = async (tEntityId: string): Promise<Catalog | undefined> => {
        const catalogDB = await this.modelCatalog.findById(tEntityId);
        const catalog   = Catalog.getCatalogById(catalogDB);
        if(!catalog.state) return undefined;
        return catalog;
    }
    public postEntity = async (tEntityQuery: CatalogInterface): Promise<Catalog | undefined> => {
        const catalog = new Catalog(tEntityQuery);
        const catalogDB = await this.modelCatalog.create(catalog);
        return Catalog.getCatalogById(catalogDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: CatalogInterface): Promise<Catalog | undefined> => {
        const catalogDB = await this.modelCatalog.findByIdAndUpdate(tEntityId, tEntityQuery, {new: true});
        const catalog = Catalog.getCatalogById(catalogDB);
        return catalog;
    }
    public deleteEntity = async (tEntityId: string): Promise<Catalog | undefined> => {
        const catalogDB = await this.modelCatalog.findByIdAndUpdate(tEntityId, { state: false }, {new:true});
        const catalog   = Catalog.getCatalogById(catalogDB);
        return catalog;
    }

}