import axios from "axios";
import { API } from '../settings/API.setting'
// ------------ POST
/**
 *
 * @param route Path
 * @param data Body
 * @returns
 */
export const post = (
  route,
  data
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res;
      res = await axios.post(API.URL + route, data);
      console.log(res);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

// ------------ GET

/**
 *
 * @param route Path
 * @param query_params Query params (after path)
 * @returns
 */
export const get = (
  route,
  query_params
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res;
      let params = "";

      if (query_params) {
        params = new URLSearchParams(query_params);
        route += "?" + params;
        console.log(route)
      }

      res = await axios.get(API.URL + route);
      resolve(res.data);
    } catch (error) {
      console.log("ERROR: FetchService | Post:", error);
      reject(error);
    }
  });
};

// ------------ DELETE

/**
 *
 * @param route Path
 * @returns
 */
export const del = (
  route
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res;
      let params = "";

      res = await axios.delete(API.URL + route + params);
      resolve(res.data);
    } catch (error) {
      console.log("ERROR: FetchService | Post:", error);
      reject(error);
    }
  });
};

// ------------ PUT

/**
 *
 * @param route Path
 * @param query_params Params that go after ?
 * @param serverAuthRequired Heroku Auth
 * @param tokenAuthRequired Token Auth
 * @param extraHeaders
 * @returns
 */
export const put = (
  route,
  data
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res;
      res = await axios.put(API.URL + route, data);
      resolve(res.data);
    } catch (error) {
      console.log("ERROR: FetchService | Post:", error);
      reject(error);
    }
  });
};