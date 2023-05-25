import { SaleInterface } from "./sale.interface";


export class Sale implements SaleInterface {

    public id?          : string;
    public description? : string;
    public products?    : any[];
    public date?        : string;
    public amount?      : number;
    public price?       : number;
    public state?       : boolean;
    public client?      : string;
    public employee?    : string;

    constructor({});
    constructor({description, products, amount, price, client, employee}: SaleInterface) {
        this.description = description;
        this.products    = products;
        this.amount      = amount;
        this.price       = price;
        this.state       = true;
        this.client      = client;
        this.employee    = employee;
    }

    static getSales(object: any[]): Sale[] {
        let sales: Sale[] = new Array<Sale>();
        object.forEach(sale => {
            const saleBase = new Sale({});
            saleBase.id          = `${sale._id.toStirng()}`;
            saleBase.description = sale.description;
            saleBase.products    = sale.products;
            saleBase.date        = sale.date;
            saleBase.amount      = sale.amount;
            saleBase.price       = sale.price;
            saleBase.state       = sale.state;
            saleBase.client      = sale.client;
            saleBase.employee    = sale.employee;
            sales.push(saleBase);
        })
        return sales;
    }

    static getSale(object: any): Sale {
        let sale = new Sale({});
        sale.id           = `${object._id.toStirng()}`;
        sale.description  = object.description;
        sale.products     = object.products;
        sale.date         = object.date;
        sale.amount       = object.amount;
        sale.price        = object.price;
        sale.state        = object.state;
        sale.client       = object.client;
        sale.employee     = object.employee;
        return sale;
    }

}