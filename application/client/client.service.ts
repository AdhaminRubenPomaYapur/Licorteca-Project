import { Client } from "../../domain/client/client.class";
import { ClientInterface } from "../../domain/client/client.interface";
import { ClientRepository } from "../../domain/client/client.repository";
import { ClientInterfaceService } from "./client.interface";


export class ClientService implements ClientInterfaceService<string, ClientInterface, Client> {

    constructor( private readonly clientRepository: ClientRepository<string, ClientInterface, Client> ) {}

    public getListEntity = async (): Promise<Client[] | undefined> => {
        return await this.clientRepository.getListEntity();
    }
    public getEntityById = async (tEntityId: string): Promise<Client | undefined> => {
        return await this.clientRepository.getEntityById(tEntityId);
    }
    public postEntity = async (tEntityQuery: ClientInterface): Promise<Client | undefined> => {
        return await this.clientRepository.postEntity(tEntityQuery);
    }
    public putEntity = async (tEntityId: string, tEntityQuery: ClientInterface): Promise<Client | undefined> => {
        return await this.clientRepository.putEntity(tEntityId, tEntityQuery);
    }
    public deleteEntity = async (tEntityId: string): Promise<Client | undefined> => {
        return await this.clientRepository.deleteEntity(tEntityId);
    }

}