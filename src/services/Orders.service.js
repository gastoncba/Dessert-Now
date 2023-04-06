import { post } from "./Fetch.service";

const SERVICE_ENDPOINT = "create-order";

export const OrdersServices = (() => {
  const createOrder = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await post(SERVICE_ENDPOINT, data);
        resolve({})
      } catch (error) {
        reject("ERROR | CREATE_ORDER");
      }
    });
  };

  return { createOrder };
})();
