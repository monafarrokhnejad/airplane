import axios from "axios";
import { baseUrl } from "./baseUrl";
import { CURRENT_USER } from "../utilities/storage";
import { getStorage } from "../helper/appManager";
import { onLogout } from "c/Infrastructures/Sidebar/Logout";

const instance = axios.create({
  baseURL: baseUrl,
});

const onRequest = async (config) => {
  const token = getStorage(CURRENT_USER)?.token;
  const headers = {
    ...(config.data instanceof FormData ? {} : { "Content-Type": "application/json" }),
    Authorization: `Bearer ${token}`,
  };
  config.headers = { ...config.headers, ...headers };
  return config;
};

const onSuccessResponse = (res) => Promise.resolve(res);

const onFailResponse = (error) => {
  error?.response?.data?.messages[0]?.code === "ERROR_UNAUTHENTICATED_REQUEST" && onLogout();
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccessResponse, onFailResponse);
instance.interceptors.request.use(onRequest);
export default instance;
