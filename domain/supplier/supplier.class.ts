import { SupplierInterface } from "./supplier.interface";

export class Supplier implements SupplierInterface {

    public id?        : string;
    public name?      : string;
    public lastname?  : string;
    public email?     : string;
    public password?  : string;
    public birthdate? : string;
    public cellphone? : string;
    public state?     : boolean;
    public created?   : string;

    constructor({});
    constructor({id, name, lastname, email, password, birthdate, cellphone, catalogs, state}: any);

    constructor({name, lastname, email, password, cellphone}: SupplierInterface) {
        this.name      = name;
        this.lastname  = lastname;
        this.email     = email;
        this.password  = password;
        this.cellphone = cellphone;
        this.birthdate = 'No filled';
        this.state     = true;
        this.created   = `${new Date()}`
    }

    static getSuppliers(object: any[]): Supplier[]{
        let suppliers: Supplier[] = new Array<Supplier>();
        object.forEach(supplier => {
            const supplierBase = new Supplier({})
            supplierBase.id        = `${supplier._id.toString()}`;
            supplierBase.name      = supplier.name;
            supplierBase.lastname  = supplier.lastname;
            supplierBase.email     = supplier.email;
            supplierBase.password  = supplier.password;
            supplierBase.birthdate = supplier.birthdate;
            supplierBase.cellphone = supplier.cellphone;
            supplierBase.state     = supplier.state;
            supplierBase.created   = supplier.created;
            suppliers.push(supplierBase);
        })
        return suppliers;
    }

    static getSupplierById(object: any): Supplier {
        const supplier = new Supplier({});
        supplier.id        = `${object._id.toString()}`;
        supplier.name      = object.name;
        supplier.lastname  = object.lastname;
        supplier.email     = object.email;
        supplier.password  = object.password;
        supplier.birthdate = object.birthdate;
        supplier.cellphone = object.cellphone;
        supplier.state     = object.state;
        supplier.created   = object.created;
        return supplier;
    }

}