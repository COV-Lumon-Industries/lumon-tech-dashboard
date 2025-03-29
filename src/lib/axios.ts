import { STORAGE_KEY } from "@/context/auth-provider";
import axios from "axios";

declare module "axios" {
  export interface AxiosInstance {
    request<T = any, U = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any, U = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any, U = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    head<T = any, U = any>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    post<T = any, U = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    put<T = any, U = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    patch<T = any, U = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
  }
}

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') {
      return config;
    }
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return config;
    }

    const { token } = JSON.parse(data);
    console.log("APPLE",token)

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
