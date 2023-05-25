import { Schema, model } from "mongoose";
import { ProductInterface } from "../../../domain/product/product.interface";


const SchemaProduct: Schema = new Schema<ProductInterface>(
    {
        productids  : [ { type: String } ],
        name        : { type: String,  required: true },
        description : { type: String,  required: true },
        stockmin    : { type: Number,   },
        stockmax    : { type: Number,   },
        stock       : { type: Number,   },
        price       : { type: Number,   },
        state       : { type: Boolean,  },
        created     : { type: String,   },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const ProductModel = model<ProductInterface>('Product', SchemaProduct);
export default ProductModel;