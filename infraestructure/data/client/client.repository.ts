import { Model } from "mongoose";
import { Client } from "../../../domain/client/client.class";
import { ClientInterface } from "../../../domain/client/client.interface";
import { ClientRepository } from "../../../domain/client/client.repository";

export class RepositoryClient implements ClientRepository<string, ClientInterface, Client> {

    constructor( private readonly modelClient: Model<ClientInterface> ) {}

    public getListEntity = async (): Promise<Client[] | undefined> => {
        const clientsDB = (await this.modelClient.find()).filter(c => c.state);
        const clients   = Client.getClients(clientsDB);
        return clients;
    }
    public getEntityById = async (tEntityId: string): Promise<Client | undefined> => {
        const clientDB = await this.modelClient.findById(tEntityId);
        const client   = Client.getClientById(clientDB);
        return client;
    }
    public postEntity = async (tEntityQuery: ClientInterface): Promise<Client | undefined> => {
        const client = new Client(tEntityQuery);
        const clientDB = await this.modelClient.create(client);
        return Client.getClientById(clientDB);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: ClientInterface): Promise<Client | undefined> => {
        const clientDB = await this.modelClient.findByIdAndUpdate(tEntityId, tEntityQuery, { new: true });
        const client = Client.getClientById(clientDB);
        return client;
    }
    public deleteEntity = async (tEntityId: string): Promise<Client | undefined> => {
        const clientDB = await this.modelClient.findByIdAndUpdate(tEntityId, { state: false }, { new: true });
        const client = Client.getClientById(clientDB);
        return client;
    }

}