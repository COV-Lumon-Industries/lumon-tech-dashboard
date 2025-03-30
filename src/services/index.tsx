import axios from "@/lib/axios";
import { PostLoginResponse, PostRegisterResponse } from "@/types";

export const postRegisterUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return axios.post<PostRegisterResponse>( `${import.meta.env.VITE_API_URL}/auth/register`, data);
};

export const postLoginUser = async (data: {
  username: string;
  password: string;
}) => {
  return axios.post<PostLoginResponse>(`${import.meta.env.VITE_API_URL}/auth/login`, data);
};
