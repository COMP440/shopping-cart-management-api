import * as cartDao from "../models/cartDao";
import * as productDao from "../models/productDao";

export const getCartItems = async (user_id) => {
  try {
    const cartItems = await cartDao.getCartItems(user_id);

    const aggregatedItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.product_id === item.product_id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.total_price = (
          parseFloat(existingItem.total_price) + parseFloat(item.total_price)
        ).toFixed(2);
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);

    return aggregatedItems;
  } catch {
    throw new Error("Failed to fetch cart items");
  }
};

export const addToCart = async (user_id, product_id, quantity) => {
  try {
    const cartItems = await cartDao.getCartItems(user_id);
    const existingItem = cartItems.find(
      (item) => item.product_id === product_id
    );

    if (existingItem) {
      return await cartDao.updateCartItem(
        existingItem.cart_item_id,
        existingItem.quantity + quantity
      );
    } else {
      return await cartDao.addToCart(user_id, product_id, quantity);
    }
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

export const placeOrder = async (user_id) => {
  try {
    const cartItems = await cartDao.getCartItems(user_id);

    for (const item of cartItems) {
      const productData = await productDao.getProductById(item.product_id);
      if (productData.length > 0) {
        const product = productData[0];
        const inventory = product.inventory - item.quantity;
        await productDao.updateProductInventory(item.product_id, inventory);
      } else {
        console.error("There is no product");
      }
    }

    return await cartDao.placeOrder(user_id);
  } catch {
    throw new Error("Failed to place order");
  }
};
