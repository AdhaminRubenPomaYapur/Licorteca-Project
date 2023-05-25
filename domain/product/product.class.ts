import { FLAG } from '../enums';
import { ProductInterface } from './product.interface';

export class Product implements ProductInterface {

    public id?          : string;
    public name?        : string;
    public description? : string;
    public stockmin?    : number;
    public stockmax?    : number;
    public stock?       : number;
    public price?       : number;
    public productids?  : string[];
    public state?       : boolean;
    public created?     : string;

    constructor({});

    constructor({name, description}: ProductInterface) {
        this.name        = name;
        this.description = description;
        this.stockmin    = 0;
        this.stockmax    = 0;
        this.stock       = 0;
        this.price       = 0;
        this.productids  = [];
        this.state       = true;
        this.created     = `${new Date()}`;
    }

    static getProducts(object: any[]): Product[]{
        let products: Product[] = new Array<Product>();
        object.forEach(product => {
            const productBase = new Product({});
            productBase.id          = `${product._id.toString()}`;
            productBase.name        = product.name;
            productBase.description = product.description;
            productBase.stockmin    = product.stockmin;
            productBase.stockmax    = product.stockmax;
            productBase.stock       = product.stock;
            productBase.price       = product.price;
            productBase.productids  = product.productids;
            productBase.state       = product.state;
            productBase.created     = product.created;
            products.push(productBase);
        })
        return products;
    }

    static getProductById(object: any): Product {
        const product = new Product({});
        product.id          = `${object._id.toString()}`;
        product.name        = object.name,
        product.description = object.description,
        product.stockmin    = object.stockmin;
        product.stockmax    = object.stockmax;
        product.stock       = object.stock,
        product.price       = object.price,
        product.productids  = object.productids;
        product.state       = object.state;
        product.created     = object.created;
        console.log(product);
        return product;
    }

    public existsProductByCatalogId = (id: string) => this.productids?.includes(id) ? true : false;
    public addProductIds = (id: string)   => this.productids?.push(id);

    static getProductByIdProductCatalog = (id: string, products: any[]) => {
        let productReturn = new Product({});
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            for (let j = 0; j < product.productids!.length; j++) {
                const productCatalogId = product.productids![j];
                if(productCatalogId === id) {
                    console.log(product);
                    productReturn = this.getProductById(product);
                }
            }
        }
        return productReturn;
    }

    public updateStock = (amount: number, flag: FLAG) => {
        if(flag === FLAG.Sales && this.stock! > amount) this.stock! -= amount;
        if(flag === FLAG.Purchase)                      this.stock! += amount;
    }
    
    public priceSubTotal = (amount: number) => this.price! * amount;

}