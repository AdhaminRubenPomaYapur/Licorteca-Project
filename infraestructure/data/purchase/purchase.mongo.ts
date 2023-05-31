import { Schema, model } from "mongoose";
import { PurchaseInterface } from "../../../domain/purchase/purchase.interface";

const SchemaPurchase: Schema = new Schema<PurchaseInterface>(
    {
        description  : { type: String, required: true },
        date         : { type: String  },
        products     : { type: Map     },
        amount       : { type: Number  },
        total        : { type: Number  },
        state        : { type: Boolean },
        supplier     : { type: Schema.Types.ObjectId, ref: 'Supplier' },
        employee     : { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const PurchaseModel = model<PurchaseInterface>('Purchase', SchemaPurchase);
export default PurchaseModel;