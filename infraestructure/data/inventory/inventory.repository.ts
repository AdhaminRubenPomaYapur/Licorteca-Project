import { Model } from "mongoose";
import { Inventory } from "../../../domain/inventory/inventory.class";
import { InventoryInterface } from "../../../domain/inventory/inventory.interface";
import { InventoryRepository } from "../../../domain/inventory/inventory.repository";
import { ProductInterface } from "../../../domain/product/product.interface";

export class RepositoryInventory implements InventoryRepository<string, InventoryInterface, Inventory> {

    constructor( 
        private readonly modelInventory: Model<InventoryInterface>,
        private readonly modelProduct  : Model<ProductInterface>
    ) {}

    public updateStock = async (tEntityId: string): Promise<Inventory | undefined> => {
        const inventory = await this.getEntityById(tEntityId);
        const products  = await this.modelProduct.find();
        inventory!.stock = 0;
        inventory?.updateStock(products);
        inventory?.updateStateInventory();
        const inventoryUpdate = await this.putEntity(tEntityId, inventory!);
        return inventoryUpdate;
    }

    public addProductId = async (tEntityId: string, tEntityQuery: string): Promise<Inventory | undefined> => {
        const inventory = await this.getEntityById(tEntityId);
        if( !inventory?.existsProductById(tEntityQuery) ) inventory?.addProductToList(tEntityQuery);
        const inventoryUpdate = await this.putEntity(tEntityId, inventory!);
        return inventoryUpdate;
    }
    public getListEntity = async (): Promise<Inventory[] | undefined> => {
        const inventoriesDB = (await this.modelInventory.find()).filter(i => i.state);
        const inventory     = Inventory.getInventories(inventoriesDB);
        return inventory;
    }
    public getEntityById = async (tEntityId: string): Promise<Inventory | undefined> => {
        const inventoryDB = await this.modelInventory.findById(tEntityId);
        const inventory   = Inventory.getInventoryById(inventoryDB);
        if(!inventory.state) return undefined;
        return inventory;
    }
    public postEntity = async (tEntityQuery: InventoryInterface): Promise<Inventory | undefined> => {
        const inventory = new Inventory(tEntityQuery);
        const inventoryDB = await this.modelInventory.create(inventory);
        return Inventory.getInventoryById(inventoryDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: InventoryInterface): Promise<Inventory | undefined> => {
        const inventoryDB = await this.modelInventory.findByIdAndUpdate(tEntityId, tEntityQuery, {new: true});
        const inventory = Inventory.getInventoryById(inventoryDB);
        return inventory;
    }
    public deleteEntity = async (tEntityId: string): Promise<Inventory | undefined> => {
        const inventoryDB = await this.modelInventory.findByIdAndUpdate(tEntityId, { state: false }, {new:true});
        const inventory   = Inventory.getInventoryById(inventoryDB);
        return inventory;
    }

}