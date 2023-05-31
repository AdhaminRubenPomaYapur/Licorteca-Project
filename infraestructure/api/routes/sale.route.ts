import { Router } from "express";
import { saleController } from "../../dependencies";


const routerSale = Router();

routerSale.get   ('/',      saleController.GET);
routerSale.get   ('/:id',   saleController.GETBYID);
routerSale.post  ('/',      saleController.POST);
routerSale.put   ('/:id',   saleController.PUT);
routerSale.delete('/:id',   saleController.DELETE);

export default routerSale;