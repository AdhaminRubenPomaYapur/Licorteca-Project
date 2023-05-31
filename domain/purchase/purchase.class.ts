import { PurchaseInterface } from "./purchase.interface";

export class Purchase implements PurchaseInterface {

    public id?          : string;
    public description? : string;
    public date?        : string;
    public products?    : Map<string, string | number>[];
    public amount?      : number;
    public total?       : number;
    public state?       : boolean;
    public supplier?    : string;
    public employee?    : string;

    constructor({});
    constructor({description, products, amount, total, supplier, employee}: PurchaseInterface) {
        this.description = description;
        this.date        = `${new Date()}`;
        this.products    = products;
        this.amount      = amount;
        this.total       = total;
        this.state       = true;
        this.supplier    = supplier;
        this.employee    = employee;
    }

    static getPurchases(object: any[]): Purchase[] {
        let purchases: Purchase[] = new Array<Purchase>();
        object.forEach(purchase => {
            const purchaseBase = new Purchase({});
            purchaseBase.id          = `${purchase._id.toStirng()}`;
            purchaseBase.description = purchase.description;
            purchaseBase.products    = purchase.products;
            purchaseBase.date        = purchase.date;
            purchaseBase.amount      = purchase.amount;
            purchaseBase.total       = purchase.total;
            purchaseBase.state       = purchase.state;
            purchaseBase.supplier    = purchase.supplier;
            purchaseBase.employee    = purchase.employee;
            purchases.push(purchaseBase);
        })
        return purchases;
    }

    static getPurchase(object: any): Purchase {
        let purchase = new Purchase({});
        purchase.id           = `${object._id.toStirng()}`;
        purchase.description  = object.description;
        purchase.products     = object.products;
        purchase.date         = object.date;
        purchase.amount       = object.amount;
        purchase.total        = object.total;
        purchase.state        = object.state;
        purchase.supplier     = object.supplier;
        purchase.employee     = object.employee;
        return purchase;
    }

}