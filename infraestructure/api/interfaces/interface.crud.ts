import { GET, PUT, DELETE, POST } from './methods.crud';

export interface InterfaceCrud extends 
    GET,
    POST,
    PUT,
    DELETE
{}