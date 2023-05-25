import { Catalog } from "../../domain/catalog/catalog.class";
import { CatalogInterface } from "../../domain/catalog/catalog.interface";
import { CatalogRepository } from "../../domain/catalog/catalog.repository";
import { FLAG } from "../../domain/enums";
import { Inventory } from "../../domain/inventory/inventory.class";
import { InventoryInterface } from "../../domain/inventory/inventory.interface";
import { InventoryRepository } from "../../domain/inventory/inventory.repository";

import { Product } from "../../domain/product/product.class";
import { ProductInterface } from "../../domain/product/product.interface";
import { ProductRepository } from "../../domain/product/product.repository";

import { Purchase } from "../../domain/purchase/purchase.class";
import { PurchaseInterface } from "../../domain/purchase/purchase.interface";
import { PurchaseRepository } from "../../domain/purchase/purchase.repository";
import { PurchaseInterfaceService } from "./purchase.interface";

export class PurchaseService implements PurchaseInterfaceService<string, PurchaseInterface, Purchase> {

    constructor(
        private readonly catalogRepository   : CatalogRepository<string,  CatalogInterface, Catalog>,
        private readonly purchaseRepository  : PurchaseRepository<string, PurchaseInterface, Purchase>,
        private readonly inventoryRepository : InventoryRepository<string, InventoryInterface, Inventory>,
        private readonly productRepository   : ProductRepository<string, ProductInterface, Product>
    ) {}

    public getListEntity = async (): Promise<Purchase[] | undefined> => {
        return await this.purchaseRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Purchase | undefined> => {
        return await this.purchaseRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: PurchaseInterface): Promise<Purchase | undefined> => {
        const catalogs    : Catalog[] | undefined   = await this.catalogRepository.getCatalogsBySupplier(tEntityQuery.supplier!);
        const products    : Product[] | undefined   = await this.productRepository.getListEntity();
        const inventories : Inventory[] | undefined = await this.inventoryRepository.getListEntity();

        for (let i = 0; i < tEntityQuery.products?.length!; i++) {
            const productCatalogQuery = tEntityQuery.products![i];
            for (let j = 0; j < catalogs!.length; j++) {
                const catalog = catalogs![j];
                for (let k = 0; k < catalog.products!.length; k++) {
                    const product = catalog.products![k];
                    if(product.get('id') === productCatalogQuery.get('id')){
                        const id = product.get('id') as string;
                        const stock = productCatalogQuery.get('stokc') as number;
                        catalog.updateStock(id, stock, FLAG.Sales);
                    }
                }
            }
        }

        for (let i = 0; i < tEntityQuery.products?.length!; i++) {
            const productCatalogQuery = tEntityQuery.products![i];
            for (let j = 0; j < products!.length; j++) {
                if(productCatalogQuery.get('id') === products![j].id){
                    const stock: number = productCatalogQuery.get('stock') as number;
                    products![j].updateStock(stock, FLAG.Purchase);
                }
            }
        }

        // for (let i = 0; i < inventories!.length; i++) {
        //     const inventory = inventories![i];
        //     for (let j = 0; j < array.length; j++) {
        //         const element = array[j];
                
        //     }
        // }

        let   amount: number = 0;


        // const amounts  : number[]  = new Array<number>();
        // const products : Product[] = new Array<Product>();
        // let amount = 0;
        // tEntityQuery.products?.forEach(async (product) => {
        //     const productDB = await this.productRepository.getEntityById(product.id);
        //     products.push(productDB!);
        //     amounts.push(product.amount);
        //     amount += product.amount;
        // });
        // const prices   : number[]  = new Array<number>();
        // for (let index = 0; index < products.length; index++) {
        //     prices.push(products[index].priceSubTotal(amounts[index]));
        // }
        // let total: number = 0;
        // for (let index = 0; index < prices.length; index++) {
        //     total += prices[index];
        // }
        // tEntityQuery.total  = total;
        // tEntityQuery.amount = amount;
        return await this.purchaseRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: PurchaseInterface): Promise<Purchase | undefined> => {
        return await this.purchaseRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Purchase | undefined> => {
        return await this.purchaseRepository.deleteEntity(tEntityId);
    }

}