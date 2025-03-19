import * as productDao from "../models/productDao";

export const getProducts = async () => {
  try {
    return await productDao.getProducts();
  } catch {
    throw new Error("Failed to fetch products");
  }
};
