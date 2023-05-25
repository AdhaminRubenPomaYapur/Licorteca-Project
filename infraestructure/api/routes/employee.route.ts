import { Router } from "express";
import { employeeController } from "../../dependencies";


const routerEmployee = Router();

routerEmployee.get   ('/',      employeeController.GET);
routerEmployee.get   ('/:id',   employeeController.GETBYID);
routerEmployee.post  ('/',      employeeController.POST);
routerEmployee.put   ('/:id',   employeeController.PUT);
routerEmployee.delete('/:id',   employeeController.DELETE);

export default routerEmployee;