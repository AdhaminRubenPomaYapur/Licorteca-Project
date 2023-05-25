export interface SaleInterface {
    id?          : string;
    description? : string;
    products?    : any[];
    date?        : string;
    amount?      : number;
    price?       : number;
    state?       : boolean;
    client?      : string;
    employee?    : string;
}