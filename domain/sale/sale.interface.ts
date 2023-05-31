export interface SaleInterface {
    id?          : string;
    description? : string;
    products?    : Map<string, string | number>[];
    date?        : string;
    amount?      : number;
    total?       : number;
    state?       : boolean;
    client?      : string;
    employee?    : string;
}