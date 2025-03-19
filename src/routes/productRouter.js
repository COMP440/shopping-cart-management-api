import express from "express";
import * as productController from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

export default productRouter;
