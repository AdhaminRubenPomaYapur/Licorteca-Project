import { Router } from "express";
import { supplierController } from "../../dependencies";


const routerSupplier = Router();

routerSupplier.get   ('/',      supplierController.GET);
routerSupplier.get   ('/:id',   supplierController.GETBYID);
routerSupplier.post  ('/',      supplierController.POST);
routerSupplier.put   ('/:id',   supplierController.PUT);
routerSupplier.delete('/:id',   supplierController.DELETE);

export default routerSupplier;