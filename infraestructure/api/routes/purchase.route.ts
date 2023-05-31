import { Router } from "express";
import { purchaseController } from "../../dependencies";


const routerPurchase = Router();

routerPurchase.get   ('/',      purchaseController.GET);
routerPurchase.get   ('/:id',   purchaseController.GETBYID);
routerPurchase.post  ('/',      purchaseController.POST);
routerPurchase.put   ('/:id',   purchaseController.PUT);
routerPurchase.delete('/:id',   purchaseController.DELETE);

export default routerPurchase;