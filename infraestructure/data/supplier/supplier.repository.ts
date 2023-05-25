import { Model } from "mongoose";
import { Supplier } from "../../../domain/supplier/supplier.class";
import { SupplierInterface } from "../../../domain/supplier/supplier.interface";
import { SupplierRepository } from "../../../domain/supplier/supplier.repository";

export class RepositorySupplier implements SupplierRepository<string, SupplierInterface, Supplier> {

    constructor( private readonly modelSupplier: Model<SupplierInterface> ) {}

    public getListEntity = async (): Promise<Supplier[] | undefined> => {
        const suppliersDB = (await this.modelSupplier.find()).filter(s => s.state);
        const supplier = Supplier.getSuppliers(suppliersDB);
        return supplier;
    }
    public getEntityById = async (tEntityId: string): Promise<Supplier | undefined> => {
        const supplierDB = await this.modelSupplier.findById(tEntityId);
        const supplier = Supplier.getSupplierById(supplierDB);
        if( !supplier.state ) return undefined;
        return supplier;
    }
    public postEntity = async (tEntityQuery: SupplierInterface): Promise<Supplier | undefined> => {
        const supplier = new Supplier(tEntityQuery);
        const supplierDB = await this.modelSupplier.create(supplier);
        return Supplier.getSupplierById(supplierDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: SupplierInterface): Promise<Supplier | undefined> => {
        const supplierDB = await this.modelSupplier.findByIdAndUpdate(tEntityId, tEntityQuery, { new: true });
        const supplier = Supplier.getSupplierById(supplierDB);
        return supplier;
    }
    public deleteEntity = async (tEntityId: string): Promise<Supplier | undefined> => {
        const supplierDB = await this.modelSupplier.findByIdAndUpdate(tEntityId, { state: false }, { new: true });
        const supplier = Supplier.getSupplierById(supplierDB);
        return supplier;
    }

}