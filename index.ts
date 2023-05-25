import 'dotenv/config';
import { Server } from './infraestructure/config/server';
const server = new Server();
server.listen();