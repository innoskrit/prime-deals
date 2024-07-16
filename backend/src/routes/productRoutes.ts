import express from 'express';
import { getProducts } from '../controller/productController';

const productRouter = express.Router();

productRouter.get('/products', getProducts);

export default productRouter