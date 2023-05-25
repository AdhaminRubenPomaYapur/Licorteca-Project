import { Router } from "express";
import { clientController } from "../../dependencies";


const routerClient = Router();

routerClient.get   ('/',      clientController.GET);
routerClient.get   ('/:id',   clientController.GETBYID);
routerClient.post  ('/',      clientController.POST);
routerClient.put   ('/:id',   clientController.PUT);
routerClient.delete('/:id',   clientController.DELETE);

export default routerClient;