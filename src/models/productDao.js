import { AppDataSource } from "../../db/dataSource";

export const getProducts = async () => {
  try {
    const products = await AppDataSource.query("SELECT * FROM products");
    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};

export const getProductById = async (productId) => {
  try {
    const product = await AppDataSource.query(
      "SELECT * FROM products WHERE id = ?",
      [productId]
    );
    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product by ID");
  }
};

export const updateProductInventory = async (productId, inventory) => {
  try {
    const result = await AppDataSource.query(
      "UPDATE products SET inventory = ? WHERE id = ?",
      [inventory, productId]
    );
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product inventory");
  }
};
