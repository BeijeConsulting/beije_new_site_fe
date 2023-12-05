import axios from "axios/index";
import { ENVIRONMENT } from "../utils/properties";
import { isEmpty } from "lodash";

const axiosInstance = axios.create({ baseURL: ENVIRONMENT.API_REST_BE });
// const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_REST_BE ? process.env.REACT_APP_API_REST_BE : ENVIRONMENT.API_REST_BE });

const defaultHeaders = {
  Accept: "*/*",
  "Content-type": "application/json",
  "Accept-Language": "it"
};
// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    window.Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  }
);

export const get = async (path, obj = {}, headers = {}) => {
  try {
    const queryString = Object.keys(obj).map(key => key + "=" + obj[key]).join("&");
    const combinedHeaders = {
      ...defaultHeaders,
      ...headers
    };
    let { data } = await axiosInstance.get(
      `${ENVIRONMENT.API_REST_BE}${path}${!isEmpty(queryString) ? "?" + queryString : ""}`,
      // `${process.env.REACT_APP_API_REST_BE ? process.env.REACT_APP_API_REST_BE : ENVIRONMENT.API_REST_BE}${path}${!isEmpty(queryString) ? "?" + queryString : ""}`,
      {
        headers: combinedHeaders,
      }
    );
    return data;
  } catch (error) {
    // generally, it enters here when the call goes to "failed"
    // return { error: { messageCode: "ER000" } };
    // window.location("/error")
    // location.href = "/error"
  }
}

// export const deleteApi = async (path, obj = {}) => {
//   try {
//     const token = getUserInfoLocal('token');
//     if (token !== undefined) {
//       defaultHeaders.Authorization = `Bearer ${token}`;
//     }
//     const queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
//     let { data } = await axiosInstance.delete(
//       `${ENVIRONMENT.API_REST_BE}${path}${!isEmpty(queryString) ? '?'+queryString : ''}`,
//       {
//         headers: defaultHeaders,
//       }
//     );
//     return data;
//   } catch (error) {
//     // generally, it enters here when the call goes to "failed"
//     return { error: {messageCode: 'ER000'} };
//   }
// }

export const post = async (path, obj = {}) => {
  try {
    let { data } = await axiosInstance.post(
      ENVIRONMENT.API_REST_BE + path,
      // process.env.REACT_APP_API_REST_BE ? process.env.REACT_APP_API_REST_BE : ENVIRONMENT.API_REST_BE + path,
      obj,
      {
        headers: defaultHeaders
      }
    );
    return data;
  } catch (error) {
    // generally, it enters here when the call goes to "failed"
    return { error: { messageCode: 'ER000' } };
  }
}

export default axiosInstance;
