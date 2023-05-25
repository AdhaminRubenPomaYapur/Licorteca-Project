import { Schema, model } from 'mongoose';
import { CatalogInterface } from '../../../domain/catalog/catalog.interface';

const SchemaCatalog: Schema = new Schema<CatalogInterface>(
    {
        type     : { type: String, required: true },
        products : [ { type: Map } ],
        supplier : { type: Schema.Types.ObjectId, ref: 'Supplier' },
        state    : { type: Boolean }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const CatalogModel = model<CatalogInterface>('Catalog', SchemaCatalog);
export default CatalogModel;