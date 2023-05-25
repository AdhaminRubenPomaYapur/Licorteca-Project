import { ClientInterface } from "./client.interface";

export class Client implements ClientInterface {

    public id?        : string;
    public name?      : string;
    public lastname?  : string;
    public email?     : string;
    public password?  : string;
    public birthdate? : string;
    public cellphone? : string;
    public state?     : boolean;
    public created?   : string;

    constructor({});
    constructor({id, name, lastname, email, password, birthdate, cellphone, catalogs, state}: any);

    constructor({name, lastname, email, password, cellphone}: ClientInterface) {
        this.name      = name;
        this.lastname  = lastname;
        this.email     = email;
        this.password  = password;
        this.cellphone = cellphone;
        this.birthdate = 'No filled';
        this.state     = true;
        this.created   = `${new Date()}`
    }

    static getClients(object: any[]): Client[]{
        let clients: Client[] = new Array<Client>();
        object.forEach(client => {
            const clientBase = new Client({})
            clientBase.id        = `${client._id.toString()}`;
            clientBase.name      = client.name;
            clientBase.lastname  = client.lastname;
            clientBase.email     = client.email;
            clientBase.password  = client.password;
            clientBase.birthdate = client.birthdate;
            clientBase.cellphone = client.cellphone;
            clientBase.state     = client.state;
            clientBase.created   = client.created;
            clients.push(clientBase);
        })
        return clients;
    }

    static getClientById(object: any): Client {
        const client = new Client({});
        client.id        = `${object._id.toString()}`;
        client.name      = object.name;
        client.lastname  = object.lastname;
        client.email     = object.email;
        client.password  = object.password;
        client.birthdate = object.birthdate;
        client.cellphone = object.cellphone;
        client.state     = object.state;
        client.created   = object.created;
        return client;
    }

}