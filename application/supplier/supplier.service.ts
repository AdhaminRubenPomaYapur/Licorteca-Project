import { Supplier } from "../../domain/supplier/supplier.class";
import { SupplierInterface } from "../../domain/supplier/supplier.interface";
import { SupplierRepository } from "../../domain/supplier/supplier.repository";
import { SupplierInterfaceService } from "./supplier.interface";

export class SupplierService implements SupplierInterfaceService<string, SupplierInterface, Supplier> {

    constructor( private readonly supplierRepository: SupplierRepository<string, SupplierInterface, Supplier> ) {}

    public getListEntity = async (): Promise<Supplier[] | undefined> => {
        return await this.supplierRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Supplier | undefined> => {
        return await this.supplierRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: SupplierInterface): Promise<Supplier | undefined> => {
        return await this.supplierRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: SupplierInterface): Promise<Supplier | undefined> => {
        return await this.supplierRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Supplier | undefined> => {
        return await this.supplierRepository.deleteEntity(tEntityId);
    }

}