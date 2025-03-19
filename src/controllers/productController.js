import * as productService from "../services/productService";

export const getProducts = async (req, res) => {
  const products = await productService.getProducts();
  res.status(200).json(products);
};
