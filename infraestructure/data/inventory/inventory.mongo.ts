import { Schema, model } from 'mongoose';
import { InventoryInterface } from '../../../domain/inventory/inventory.interface';

const SchemaInventory: Schema = new Schema<InventoryInterface>(
    {
        type           : { type: String, required: true },
        stockmin       : { type: Number,  },
        stockmax       : { type: Number,  },
        stock          : { type: Number,  },
        products       : [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
        stateInventory : { type: String },
        state          : { type: Boolean, },
        created        : { type: String,  },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const InventoryModel = model<InventoryInterface>('Inventory', SchemaInventory);
export default InventoryModel;