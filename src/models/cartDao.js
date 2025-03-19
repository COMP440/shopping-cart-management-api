import { AppDataSource } from "../../db/dataSource";

export const getCartItems = async (user_id) => {
  try {
    const cartItems = await AppDataSource.query(
      `
      SELECT 
        cart_items.id AS cart_item_id,
        products.id AS product_id,
        products.name,
        products.description,
        products.price,
        cart_items.quantity,
        (products.price * cart_items.quantity) AS total_price
      FROM cart_items
      INNER JOIN products ON cart_items.product_id = products.id
      WHERE cart_items.user_id = ?`,
      [user_id]
    );

    return cartItems;
  } catch {
    throw new Error("Failed to fetch cart items");
  }
};

export const addToCart = async (user_id, product_id, quantity) => {
  try {
    return await AppDataSource.query(
      `
      INSERT INTO cart_items (user_id, product_id, quantity, created_at, updated_at)
      VALUES (?, ?, ?, NOW(), NOW())
      ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity), updated_at = NOW()`,
      [user_id, product_id, quantity]
    );
  } catch {
    throw new Error("Failed to add item to cart");
  }
};

export const updateCartItem = async (cartItemId, quantity) => {
  try {
    return await AppDataSource.query(
      `
      UPDATE cart_items 
      SET quantity = ?
      WHERE id = ?`,
      [quantity, cartItemId]
    );
  } catch {
    throw new Error("Failed to update cart item");
  }
};

export const removeCartItem = async (cartItemId) => {
  try {
    return await AppDataSource.query(`DELETE FROM cart_items WHERE id = ?`, [
      cartItemId,
    ]);
  } catch {
    throw new Error("Failed to remove cart item");
  }
};

export const placeOrder = async (user_id) => {
  try {
    return await AppDataSource.query(
      `
      DELETE FROM cart_items
      WHERE user_id = ?`,
      [user_id]
    );
  } catch {
    throw new Error("Failed to place order");
  }
};
