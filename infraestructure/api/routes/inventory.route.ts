import { Router } from "express";
import { inventoryController } from "../../dependencies";


const routerInventory = Router();

routerInventory.get   ('/',      inventoryController.GET);
routerInventory.get   ('/:id',   inventoryController.GETBYID);
routerInventory.post  ('/',      inventoryController.POST);
routerInventory.post  ('/:id',      inventoryController.POSTADDPRODUCT);
routerInventory.put   ('/:id',   inventoryController.PUT);
routerInventory.delete('/:id',   inventoryController.DELETE);

export default routerInventory;