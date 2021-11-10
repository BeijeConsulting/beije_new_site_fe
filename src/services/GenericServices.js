import axios from "axios/index";
import { getUserInfoLocal } from "../utils/utilities";
import { ENVIRONMENT } from "../utils/properties";
import {isEmpty, get as getByLodash} from 'lodash';

const axiosInstance = axios.create({ baseURL: ENVIRONMENT.API_REST_BE });
const defaultHeaders = {
  Accept: "*/*",
  "Content-type": "application/json; charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};
// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && !/auth$/.test(error.config.url)) {
      // If api call gone in 401 firs time I refresh token
      originalRequest._retry = true;
      const dataRefresh = await refreshAccessToken();
      const newToken = getByLodash(dataRefresh, 'data.token', null);
      if (dataRefresh.data) {
        localStorage.setItem("userInfo", JSON.stringify(dataRefresh.data));
        originalRequest.headers.Authorization = "Bearer " + newToken;
      }
      return axiosInstance(originalRequest);
    } else if (error.response.status === 401 && originalRequest._retry) {
      // If api call gone in 401 after refresh token I send to login page
      localStorage.removeItem('userInfo');
      window.location.href = `${ENVIRONMENT.BASE_URL}login`;
    } else {
      if (error.response.status === 403) {
        localStorage.removeItem('userInfo');
        window.location.href = `${ENVIRONMENT.BASE_URL}login`;
      } else {
        return error.response;
      }
    }
  }
);

const refreshAccessToken = async () => {
  try {
    const refreshToken = getUserInfoLocal('token');
    const username = getUserInfoLocal('username');
    
    if (refreshToken) {
      defaultHeaders.Authorization = `Bearer ${refreshToken}`;
    }
    let { data } = await axios.post(
      ENVIRONMENT.API_REST_BE + "auth/refresh-token?username="+username,
      {},
      {
        headers: defaultHeaders,
      }
    );
    return data;
  } catch (error) {
    localStorage.removeItem('userInfo');
    window.location.href = `${ENVIRONMENT.BASE_URL}login`;
  }
};

export const get = async (path, obj = {}) => {
  try {
    const token = getUserInfoLocal('token');

    if (token !== undefined) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }
    const queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
    let { data } = await axiosInstance.get(
        `${ENVIRONMENT.API_REST_BE}${path}${!isEmpty(queryString) ? '?'+queryString : ''}`,
        {
          headers: defaultHeaders,
        }
    );
    return data;
  } catch (error) {
    // generally, it enters here when the call goes to "failed"
    return { error: {messageCode: 'ER000'} };
  }
}

export const deleteApi = async (path, obj = {}) => {
  try {
    const token = getUserInfoLocal('token');
    if (token !== undefined) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }
    const queryString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
    let { data } = await axiosInstance.delete(
      `${ENVIRONMENT.API_REST_BE}${path}${!isEmpty(queryString) ? '?'+queryString : ''}`,
      {
        headers: defaultHeaders,
      }
    );
    return data;
  } catch (error) {
    // generally, it enters here when the call goes to "failed"
    return { error: {messageCode: 'ER000'} };
  }
}

export const post = async (path, obj = {}) => {
  try {
    const token = getUserInfoLocal('token', /change-user/.test(path));
    if (token !== null) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }
    let { data } = await axiosInstance.post(
        ENVIRONMENT.API_REST_BE + path,
        obj,
        {
          headers: defaultHeaders
        }
    );
    return data;
  } catch (error) {
    // generally, it enters here when the call goes to "failed"
    return { error: {messageCode: 'ER000'} };
  }
}

export default axiosInstance;
