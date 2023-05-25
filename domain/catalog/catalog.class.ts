import { CatalogInterface } from "./catalog.interface";
import { FLAG, TYPE } from "../enums";

export class Catalog implements CatalogInterface {
    public id?       : string;
    public type?     : TYPE;
    public products? : Map<string, string | number>[];
    public supplier? : string;
    public state?    : boolean;

    constructor({});
    constructor({type, supplier}: CatalogInterface) {
        this.type     = type;
        this.products = [];
        this.supplier = supplier;
        this.state    = true;
    }

    static getCatalogs(object: any[]): Catalog[] {
        let catalogs: Catalog[] = new Array<Catalog>();
        object.forEach(catalog => {
            const catalogBase = new Catalog({});
            catalogBase.id       = `${catalog._id.toString()}`;
            catalogBase.type     = catalog.type;
            catalogBase.products = catalog.products;
            catalogBase.supplier = catalog.supplier;
            catalogBase.state    = catalog.state;
            catalogs.push(catalogBase);
        });
        return catalogs;
    }

    static getCatalogById(object: any): Catalog {
        const catalog = new Catalog({});
        catalog.id       = `${object._id.toString()}`;
        catalog.type     = object.type;
        catalog.products = object.products;
        catalog.supplier = object.supplier;
        catalog.state    = object.state;
        return catalog;
    }

    public setProductById = (id: string, object: Map<string, string | number>) => {
        const products = this.products?.map(product => {
            if(product.get('id') === id) {
                product.set('name', object.get('name')!);
                product.set('stock', object.get('stock')!);
                product.set('price', object.get('price')!);
            }
            return product;
        });
        this.products = products;
    }

    public getProductById = (id: string) => {
        let productReturn = new Map<string, string | number>();
        this.products?.forEach(product => {
            if(product.get('id') === id) {
                productReturn = product;
            }
        });
        return productReturn;
    }

    public addProducts = (queryProduct: Map<string, string | number>) => this.products?.push(queryProduct);
    
    public updateStock(id: string, stock: number, flag: FLAG) {
        const product = this.getProductById(id);
        const stockActual: number = (product.get('stock') as number);
        if( flag === FLAG.Purchase) product.set('stock', stockActual + stock);
        if( flag === FLAG.Sales )   product.set('stock', stockActual - stock);
        this.setProductById(id, product);
    }

}