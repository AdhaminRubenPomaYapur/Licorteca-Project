import { Inventory } from "../../domain/inventory/inventory.class";
import { InventoryInterface } from "../../domain/inventory/inventory.interface";
import { InventoryRepository } from "../../domain/inventory/inventory.repository";
import { InventoryInterfaceService } from "./inventory.interface";

export class InventoryService implements InventoryInterfaceService<string, InventoryInterface, Inventory> {

    constructor( private readonly inventoryRepository: InventoryRepository<string, InventoryInterface, Inventory> ) {}

    public updateStock = async (tEntityId: string): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.updateStock(tEntityId);
    }
    public addProductId = async (tEntityId: string, tEntityQuery: string): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.addProductId(tEntityId, tEntityQuery!);
    }
    public getListEntity = async (): Promise<Inventory[] | undefined> => {
        return await this.inventoryRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: InventoryInterface): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: InventoryInterface): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Inventory | undefined> => {
        return await this.inventoryRepository.deleteEntity(tEntityId);
    }

}