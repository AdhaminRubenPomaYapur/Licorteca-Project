import { Model } from "mongoose";
import { SaleRepository } from "../../../domain/sale/sale.repository";
import { SaleInterface } from "../../../domain/sale/sale.interface";
import { Sale } from "../../../domain/sale/sale.class";

export class RepositorySale implements SaleRepository<string, SaleInterface, Sale> {
    
    constructor( private readonly modelSale: Model<SaleInterface> ) {}

    public getListEntity = async (): Promise<Sale[] | undefined> => {
        const salesDB = await this.modelSale.find();
        const sale = Sale.getSales(salesDB);
        return sale;
    }
    public getEntityById = async (tEntityId: string): Promise<Sale | undefined> => {
        const saleDB = await this.modelSale.findById(tEntityId);
        const sale = Sale.getSale(saleDB);
        return sale;
    }
    public postEntity = async (tEntityQuery: SaleInterface): Promise<Sale | undefined> => {
        const saleDB = await this.modelSale.create(tEntityQuery);
        const sale = Sale.getSale(saleDB);
        return sale;
    }
    public putEntity = async (tEntityId: string, tEntityQuery: SaleInterface): Promise<Sale | undefined> => {
        const saleDB = await this.modelSale.findByIdAndUpdate(tEntityId, tEntityQuery, {new: true});
        const sale = Sale.getSale(saleDB);
        return sale;
    }
    public deleteEntity = async (tEntityId: string): Promise<Sale | undefined> => {
        const saleDB = await this.modelSale.findByIdAndUpdate(tEntityId, {state: false}, {new: true});
        const sale = Sale.getSale(saleDB);
        return sale;
    }
    
}