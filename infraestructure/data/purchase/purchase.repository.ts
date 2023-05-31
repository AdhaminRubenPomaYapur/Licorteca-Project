import { Model } from "mongoose";
import { Purchase } from "../../../domain/purchase/purchase.class";
import { PurchaseInterface } from "../../../domain/purchase/purchase.interface";
import { PurchaseRepository } from "../../../domain/purchase/purchase.repository";

export class RepositoryPurchase implements PurchaseRepository<string, PurchaseInterface, Purchase> {
    constructor( private readonly modelPurchase: Model<PurchaseInterface> ) {}

    public getListEntity = async (): Promise<Purchase[] | undefined> => {
        const purchasesDB = await this.modelPurchase.find();
        const purchase = Purchase.getPurchases(purchasesDB);
        return purchase;
    }
    public getEntityById = async (tEntityId: string): Promise<Purchase | undefined> => {
        const purchaseDB = await this.modelPurchase.findById(tEntityId);
        const purchase = Purchase.getPurchase(purchaseDB);
        return purchase;
    }
    public postEntity = async (tEntityQuery: PurchaseInterface): Promise<Purchase | undefined> => {
        const purchaseDB = await this.modelPurchase.create(tEntityQuery);
        const purchase = Purchase.getPurchase(purchaseDB);
        return purchase;
    }
    public putEntity = async (tEntityId: string, tEntityQuery: PurchaseInterface): Promise<Purchase | undefined> => {
        const purchaseDB = await this.modelPurchase.findByIdAndUpdate(tEntityId, tEntityQuery, {new: true});
        const purchase = Purchase.getPurchase(purchaseDB);
        return purchase;
    }
    public deleteEntity = async (tEntityId: string): Promise<Purchase | undefined> => {
        const purchaseDB = await this.modelPurchase.findByIdAndUpdate(tEntityId, {state: false}, {new: true});
        const purchase = Purchase.getPurchase(purchaseDB);
        return purchase;
    }
    
}