import { Schema, model } from "mongoose";
import { SaleInterface } from "../../../domain/sale/sale.interface";

const SchemaSale: Schema = new Schema<SaleInterface>(
    {
        description  : { type: String, required: true },
        date         : { type: String  },
        products     : { type: Map     },
        amount       : { type: Number  },
        total        : { type: Number  },
        state        : { type: Boolean },
        client       : { type: Schema.Types.ObjectId, ref: 'Client'   },
        employee     : { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const SaleModel = model<SaleInterface>('Sale', SchemaSale);
export default SaleModel;