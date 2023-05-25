import { TYPE } from "../enums";

export interface CatalogInterface {
    id?       : string;
    type?     : TYPE;
    products? : Map<string, string | number>[];
    supplier? : string;
    state?    : boolean;
}

export interface ProductCatalog {
    id          : string;
    name        : string;
    description : string;
    stock       : number;
    price       : number
}