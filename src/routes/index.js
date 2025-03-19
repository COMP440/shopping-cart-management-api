import express from "express";
import cartRouter from "./cartRouter";
import productRouter from "./productRouter";

const router = express.Router();

router.use("/cart", cartRouter);
router.use("/products", productRouter);

export default router;
