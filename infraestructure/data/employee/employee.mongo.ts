import { Schema, model } from "mongoose";
import { EmployeeInterface } from "../../../domain/employee/employee.interface";



const SchemaEmployee: Schema = new Schema<EmployeeInterface>(
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

const EmployeeModel = model<EmployeeInterface>('Employee', SchemaEmployee);
export default EmployeeModel;