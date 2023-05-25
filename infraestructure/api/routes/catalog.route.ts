import { Router } from "express";
import { catalogController } from "../../dependencies";


const routerCatalog = Router();

routerCatalog.get   ('/',      catalogController.GET);
routerCatalog.get   ('/:id',   catalogController.GETBYID);
routerCatalog.post  ('/',      catalogController.POST);
routerCatalog.post  ('/:id',   catalogController.POSTADDPRODUCT);
routerCatalog.put   ('/:id',   catalogController.PUT);
routerCatalog.delete('/:id',   catalogController.DELETE);

export default routerCatalog;