import { FLAG } from "../../domain/enums";
import { Inventory } from "../../domain/inventory/inventory.class";
import { InventoryInterface } from "../../domain/inventory/inventory.interface";
import { InventoryRepository } from "../../domain/inventory/inventory.repository";
import { Product } from "../../domain/product/product.class";
import { ProductInterface } from "../../domain/product/product.interface";
import { ProductRepository } from "../../domain/product/product.repository";
import { Sale } from "../../domain/sale/sale.class";
import { SaleInterface } from "../../domain/sale/sale.interface";
import { SaleRepository } from "../../domain/sale/sale.repository";
import { SaleInterfaceService } from "./sale.interface";

export class SaleService implements SaleInterfaceService<string, SaleInterface, Sale> {

    constructor(
        private readonly productRepository   : ProductRepository<string, ProductInterface, Product>,
        private readonly inventoryRepository : InventoryRepository<string, InventoryInterface, Inventory>,
        private readonly saleRepository      : SaleRepository<string, SaleInterface, Sale>
    ) {}

    public getListEntity = async (): Promise<Sale[] | undefined> => {
        return await this.saleRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Sale | undefined> => {
        return await this.saleRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: SaleInterface): Promise<Sale | undefined> => {
        const products    : Product[] | undefined   = await this.productRepository.getListEntity();
        const inventories : Inventory[] | undefined = await this.inventoryRepository.getListEntity();
        
        let amountTotal: number = 0;
        let total: number = 0;

        for (let i = 0; i < tEntityQuery.products!.length; i++) {
            const productMapQuery = tEntityQuery.products![i];
            
            for (let j = 0; j < products!.length; j++) {
                const product = products![j];

                if(product.id === productMapQuery.get('id')){
                    const amount = productMapQuery.get('amount') as number;
                    total += product.priceSubTotal(amount);
                    product.updateStockProduct(amount, FLAG.Sales);
                    await this.productRepository.putEntity(product.id!, product);
                }
                
            }
            amountTotal += productMapQuery.get('stock') as number;
        }

        for (let i = 0; i < inventories!.length; i++) {
            const inventory = inventories![i];
            await this.inventoryRepository.updateStock(inventory.id!);
        }

        tEntityQuery.amount = amountTotal;
        tEntityQuery.total  = total;

        return await this.saleRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: SaleInterface): Promise<Sale | undefined> => {
        return await this.saleRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Sale | undefined> => {
        return await this.saleRepository.deleteEntity(tEntityId);
    }

    
}