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
