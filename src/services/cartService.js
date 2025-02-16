import * as cartDao from "../models/cartDao";

export const getCartItems = async (user_id) => {
  try {
    return await cartDao.getCartItems(user_id);
  } catch {
    throw new Error("Failed to fetch cart items");
  }
};

export const addToCart = async (user_id, product_id, quantity) => {
  try {
    return await cartDao.addToCart(user_id, product_id, quantity);
  } catch {
    throw new Error("Failed to add item to cart");
  }
};

export const updateCartItem = async (cartItemId, quantity) => {
  try {
    return await cartDao.updateCartItem(cartItemId, quantity);
  } catch {
    throw new Error("Failed to update cart item");
  }
};

export const removeCartItem = async (cartItemId) => {
  try {
    return await cartDao.removeCartItem(cartItemId);
  } catch {
    throw new Error("Failed to remove cart item");
  }
};
