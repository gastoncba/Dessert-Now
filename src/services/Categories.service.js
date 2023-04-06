import { get } from "./Fetch.service";

const SERVICE_ENDPOINT = "categories";

export const CategoriesService = (() => {
  const getCategories = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        let categories = await get(SERVICE_ENDPOINT, query);
        resolve(categories);
      } catch (error) {
        reject("ERROR | GET_CATEGORIES");
      }
    });
  };

  return { getCategories };
})();
