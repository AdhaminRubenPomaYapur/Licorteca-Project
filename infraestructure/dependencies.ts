import { InventoryService } from "../application/inventory/inventory.service";
import { ProductService } from "../application/product/product.service";

import { InventoryController } from "./api/controllers/inventory.controller";
import { ProductController } from "./api/controllers/product.controller";

import InventoryModel from "./data/inventory/inventory.mongo";
import ProductModel from "./data/product/product.mongo";

import { RepositoryInventory } from "./data/inventory/inventory.repository";
import { RepositoryProduct } from './data/product/product.repository';
import { RepositoryCatalog } from "./data/catalog/catalog.repository";
import CatalogModel from "./data/catalog/catalog.mongo";
import { CatalogService } from "../application/catalog/catalog.service";
import { CatalogController } from "./api/controllers/catalog.controller";
import { RepositorySupplier } from "./data/supplier/supplier.repository";
import SupplierModel from "./data/supplier/supplier.mongo";
import { SupplierService } from "../application/supplier/supplier.service";
import { SupplierController } from "./api/controllers/supplier.controller";
import { RepositoryClient } from "./data/client/client.repository";
import ClientModel from "./data/client/client.mongo";
import { ClientService } from "../application/client/client.service";
import { ClientController } from "./api/controllers/client.controller";
import { RepositoryEmployee } from "./data/employee/employee.repository";
import EmployeeModel from "./data/employee/employee.mongo";
import { EmployeeService } from "../application/employee/employee.service";
import { EmployeeController } from "./api/controllers/employee.controller";

const repositoryProduct          = new RepositoryProduct(ProductModel);
const productService             = new ProductService(repositoryProduct);
export const productController   = new ProductController(productService);

const repositoryInventory        = new RepositoryInventory(InventoryModel, ProductModel);
const inventoryService           = new InventoryService(repositoryInventory);
export const inventoryController = new InventoryController(inventoryService);

const repositoryCatalog          = new RepositoryCatalog(CatalogModel);
const catalogService             = new CatalogService(repositoryCatalog);
export const catalogController   = new CatalogController(catalogService);

const repositorySupplier         = new RepositorySupplier(SupplierModel);
const supplierService            = new SupplierService(repositorySupplier);
export const supplierController  = new SupplierController(supplierService);

const repositoryClient           = new RepositoryClient(ClientModel);
const clientService              = new ClientService(repositoryClient);
export const clientController    = new ClientController(clientService);

const repositoryEmployee         = new RepositoryEmployee(EmployeeModel);
const employeeService            = new EmployeeService(repositoryEmployee);
export const employeeController  = new EmployeeController(employeeService);