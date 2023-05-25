export interface SupplierInterface {
    id?        : string;
    name?      : string;
    lastname?  : string;
    email?     : string;
    password?  : string;
    birthdate? : string;
    cellphone? : string;
    catalogs?  : any[];
    state?     : boolean;
    created?   : string;
}