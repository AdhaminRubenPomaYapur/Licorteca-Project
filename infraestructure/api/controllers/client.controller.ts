import { Request, Response } from "express";
import { InterfaceCrud } from "../interfaces/interface.crud";
import { ClientService } from "../../../application/client/client.service";


export class ClientController implements InterfaceCrud {

    constructor( private readonly clientService: ClientService ){}
    
    public GET = async (req: Request, res: Response): Promise<void> => {
        const clients = await this.clientService.getListEntity();
        res.json({clients})
    }
    public GETBYID = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const client  = await this.clientService.getEntityById(id);
        res.json({client});
    }
    public POST = async (req: Request, res: Response): Promise<void> => {
        const { client } = req.body;
        const clientNew = await this.clientService.postEntity(client);
        res.json({client: clientNew});
    }
    public PUT = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { client } = req.body;
        const clientNew = await this.clientService.putEntity(id, client);
        res.json({client: clientNew});
    }
    public DELETE = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const client = await this.clientService.deleteEntity(id);
        res.json({client});
    }
}