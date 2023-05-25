import { STATEINVENTORY, TYPE } from "../enums";

export interface InventoryInterface {
    id?              : string;
    type?            : TYPE;
    stockmin?        : number;
    stockmax?        : number;
    stock?           : number;
    products?        : any[];
    stateInventory?  : STATEINVENTORY;
    state?           : boolean;
    created?         : string;
}