import { Router } from "express";
import { productController } from "../../dependencies";


const routerProduct = Router();

routerProduct.get   ('/',      productController.GET);
routerProduct.get   ('/:id',   productController.GETBYID);
routerProduct.post  ('/',      productController.POST);
routerProduct.post  ('/:id',   productController.POSTADDPRODUCTID);
routerProduct.put   ('/:id',   productController.PUT);
routerProduct.delete('/:id',   productController.DELETE);

export default routerProduct;