export interface PurchaseInterface {
    id?          : string;
    description? : string;
    products?    : Map<string, string | number>[];
    date?        : string;
    amount?      : number;
    total?       : number;
    state?       : boolean;
    supplier?    : string;
    employee?    : string;
}