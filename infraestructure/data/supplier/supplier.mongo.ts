import { Schema, model } from "mongoose";
import { SupplierInterface } from "../../../domain/supplier/supplier.interface";

const SchemaSupplier: Schema = new Schema<SupplierInterface>(
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

const SupplierModel = model<SupplierInterface>('Supplier', SchemaSupplier);
export default SupplierModel;