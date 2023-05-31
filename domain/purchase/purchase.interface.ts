export interface PurchaseInterface {
    id?          : string;
    description? : string;
    date?        : string;
    products?    : Map<string, string | number>[];
    amount?      : number;
    total?       : number;
    state?       : boolean;
    supplier?    : string;
    employee?    : string;
}