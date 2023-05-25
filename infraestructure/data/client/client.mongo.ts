import { Schema, model } from "mongoose";
import { ClientInterface } from "../../../domain/client/client.interface";


const SchemaClient: Schema = new Schema<ClientInterface>(
    {
        name      : { type: String, required: true },
        lastname  : { type: String, required: true },
        email     : { type: String, required: true },
        password  : { type: String, required: true },
        cellphone : { type: String, required: true },
        birthdate : { type: String, },
        state     : { type: Boolean, },
        created   : { type: String, },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const ClientModel = model<ClientInterface>('Client', SchemaClient);
export default ClientModel;