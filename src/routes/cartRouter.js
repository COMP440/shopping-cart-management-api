import express from "express";
import * as cartController from "../controllers/cartController";

const cartRouter = express.Router();

cartRouter.get("/", cartController.getCartItems);
cartRouter.post("/", cartController.addToCart);
cartRouter.patch("/:cartItemId(\\d+)", cartController.updateCartItem);
cartRouter.delete("/:cartItemId(\\d+)", cartController.removeCartItem);

export default cartRouter;
