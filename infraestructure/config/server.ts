import express from "express";
import initMongoDB from "./mongodb";
import cors from "cors";
import routerProduct from "../api/routes/product.route";
import routerInventory from "../api/routes/inventory.route";
import routerCatalog from "../api/routes/catalog.route";
import routerSupplier from "../api/routes/supplier.route";
import routerClient from "../api/routes/client.route";
import routerEmployee from "../api/routes/employee.route";
import routerPurchase from "../api/routes/purchase.route";
import routerSale from "../api/routes/sale.route";


export class Server{

    private app;
    private port : number;
    private path;

    constructor() {
        this.app  = express();
        this.port = Number(process.env.PORT);
        this.path = {
            products    : '/api/products',
            inventories : '/api/inventories',
            catalogs    : '/api/catalogs',
            suppliers   : '/api/suppliers',
            clients     : '/api/clients',
            employees   : '/api/employees',
            purchases   : '/api/purchases',
            sales       : '/api/sales',
        };

        this.connectionsDB();
        this.middleware();
        this.routes();
    }

    async connectionsDB(): Promise<void> {
        await initMongoDB();
    }

    middleware(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use(this.path.products,    routerProduct);
        this.app.use(this.path.inventories, routerInventory);
        this.app.use(this.path.catalogs,    routerCatalog);
        this.app.use(this.path.suppliers,   routerSupplier);
        this.app.use(this.path.clients,     routerClient);
        this.app.use(this.path.employees,   routerEmployee);
        this.app.use(this.path.purchases,   routerPurchase);
        this.app.use(this.path.sales,       routerSale);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Listening for http://localhost:${this.port}`))
    }


}