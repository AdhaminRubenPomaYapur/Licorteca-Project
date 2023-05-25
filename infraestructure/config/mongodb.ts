import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

const initMongoDB = async () => {
    try {
        await connect(DB_URI);
        console.log(`Connect successful to Mongo DB`);
    } catch (error) {
        console.log(`Error - ${(error as Error).message}`);
    }
}

export default initMongoDB;