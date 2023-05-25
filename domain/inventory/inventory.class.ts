import { STATEINVENTORY, TYPE } from "../enums";
import { InventoryInterface } from "./inventory.interface";

export class Inventory implements InventoryInterface {
    
    public id?             : string;
    public type?           : TYPE;
    public stockmin?       : number;
    public stockmax?       : number;
    public stock?          : number;
    public products?       : any[];
    public stateInventory? : STATEINVENTORY;
    public state?          : boolean;
    public created?        : string;

    constructor({});
    constructor({type, stockmax, stockmin}: InventoryInterface) {
        this.type            = type;
        this.stockmin        = stockmin;
        this.stockmax        = stockmax;
        this.stock           = 0;
        this.products        = [];
        this.stateInventory  = STATEINVENTORY.empty,
        this.state           = true,
        this.created         = `${new Date()}`
    }

    static getInventories(object: any[]): Inventory[] {
        let inventories: Inventory[] = new Array<Inventory>();
        object.forEach(inventory => {
            const inventoryBase = new Inventory({});
            inventoryBase.id             = `${inventory._id.toString()}`;
            inventoryBase.type           = inventory.type;
            inventoryBase.stockmin       = inventory.stockmin;
            inventoryBase.stockmax       = inventory.stockmax;
            inventoryBase.stock          = inventory.stock;
            inventoryBase.products       = inventory.products;
            inventoryBase.stateInventory = inventory.stateInventory;
            inventoryBase.state          = inventory.state;
            inventoryBase.created        = inventory.created;
            inventories.push(inventoryBase);
        });
        return inventories;
    }

    static getInventoryById(object: any): Inventory {
        const inventory = new Inventory({});
        inventory.id             = `${object._id.toString()}`;
        inventory.type           = object.type;
        inventory.stockmin       = object.stockmin;
        inventory.stockmax       = object.stockmax;
        inventory.stock          = object.stock;
        inventory.products       = object.products;
        inventory.stateInventory = object.stateInventory;
        inventory.state          = object.state;
        inventory.created        = object.created;
        return inventory;
    }

    public getProductById = (id: string) => this.products?.includes(id) ? true : false;

    public addProduct = (id: string) => this.products?.push(id);

    public updateStock = (products: any[]) => {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            for (let j = 0; j < this.products!.length; j++) {
                let idProduct          = product._id.toString();
                let productIdInventory = `${this.products![j]}`;
                if(idProduct === productIdInventory) this.stock! += product.stock;
            }
        }
    }

    public updateStateInventory = () => {
        const stockEmpty = 0;
        const stockHalf1 = this.stockmax! * 0.25;
        const stockHalf2  = this.stockmax! * 0.75;
        if( this.stock! >= stockEmpty && this.stock! < stockHalf1 ) this.stateInventory = STATEINVENTORY.empty;
        if( this.stock! >= stockHalf1 && this.stock! < stockHalf2 ) this.stateInventory = STATEINVENTORY.half;
        if( this.stock! >= stockHalf2 ) this.stateInventory = STATEINVENTORY.full;
    }

}