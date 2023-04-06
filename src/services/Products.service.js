import { get, put } from "./Fetch.service";

const SERVICE_ENDPOINT = "products";

export const ProductsService = (() => {
  const getProducts = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let products = await get(SERVICE_ENDPOINT, query);
        resolve(products);
      } catch (error) {
        reject("ERROR | GET_PRODUCTS");
      }
    });
  };

  const getProduct = (id, query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let product = await get(`${SERVICE_ENDPOINT}/${id}`, query);
        resolve(product);
      } catch (error) {
        reject("ERROR | GET_PRODUCTS");
      }
    });
  };

  const updateProducts = (id, data) => {
    return new Promise(async(resolve, reject) => {
      try {
        await put(`update-stock/${id}`, data)
        resolve({})
      } catch (error) {
        reject("ERROR | UPDATE_STOCK");
      }
    })
  }

  return { getProducts, getProduct, updateProducts };
})();
