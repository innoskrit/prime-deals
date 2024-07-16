import express from 'express';
import * as dotenv from 'dotenv';
import productRouter from './routes/productRoutes';
import { connectDatabase } from './config/dbConnection';

dotenv.config();

connectDatabase();

const app = express();

app.use('/api/v1', productRouter);

if(!process.env.SERVER_PORT) {
    console.error('server port is required')
    process.exit(1);
}

const SERVER_PORT = process.env.SERVER_PORT

app.listen(SERVER_PORT, () => {
    console.log(`server started on port ${SERVER_PORT} in ${process.env.NODE_ENV} mode`)
})