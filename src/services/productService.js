import * as productDao from "../models/productDao";

export const getProducts = async () => {
  try {
    return await productDao.getProducts();
  } catch {
    throw new Error("Failed to fetch products");
  }
};

export const getProductById = async (productId) => {
  try {
    return await productDao.getProductById(productId);
  } catch {
    throw new Error("Failed to fetch product by ID");
  }
};

export const updateProductInventory = async (productId, inventory) => {
  try {
    return await productDao.updateProductInventory(productId, inventory);
  } catch {
    throw new Error("Failed to update product inventory");
  }
};
