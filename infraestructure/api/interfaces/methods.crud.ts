import { Request, Response } from "express"

export interface GET {
    GET(req: Request, res: Response)     : Promise<void>;
    GETBYID(req: Request, res: Response) : Promise<void>;
}

export interface POST {
    POST(req: Request, res: Response)    : Promise<void>;
}

export interface PUT {
    PUT(req: Request, res: Response)     : Promise<void>;
}

export interface DELETE {
    DELETE(req: Request, res: Response)  : Promise<void>;
}