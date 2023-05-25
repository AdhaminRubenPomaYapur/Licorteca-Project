export interface ProductInterface {
    id?          : string;
    productids?  : string[];
    name?        : string;
    description? : string;
    stockmin?    : number;
    stockmax?    : number;
    stock?       : number;
    price?       : number;
    state?       : boolean;
    created?     : string;
}