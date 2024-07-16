import mongoose from "mongoose";

export const connectDatabase = (): void => {
    let DB_URI = "";

    if(process.env.NODE_ENV === "DEVELOPMENT") {
        DB_URI = process.env.DB_DEV_URI as string;
    }

    if(process.env.NODE_ENV === "PRODUCTION") {
        DB_URI = process.env.DB_PROD_URI as string;
    }

    mongoose.connect(DB_URI)
    .then((conn: mongoose.Mongoose) => {
        console.log(`MongoDB connected to host ${conn.connection.host}`);
    })
    .catch((err: Error) => {
        console.error(`error connecting to MongoDB: ${err.message}`);
    })
}