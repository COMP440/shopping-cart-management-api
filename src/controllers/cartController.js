import * as cartService from "../services/cartService";

export const getCartItems = async (req, res, next) => {
  try {
    const user_id = req.query.user_id;

    const cartItems = await cartService.getCartItems(user_id);

    res.status(200).json(cartItems);
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    await cartService.addToCart(user_id, product_id, quantity);

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateCartItem = async (req, res, next) => {
  try {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    await cartService.updateCartItem(cartItemId, quantity);

    res.status(200).json({ message: "Cart item updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const removeCartItem = async (req, res, next) => {
  try {
    const { cartItemId } = req.params;

    await cartService.removeCartItem(cartItemId);

    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    next(error);
  }
};

export const placeOrder = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    await cartService.placeOrder(user_id);

    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    next(error);
  }
};
