import axios from "@/lib/axios";
import { PostLoginResponse, PostRegisterResponse } from "@/types";

export const postRegisterUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return axios.post<PostRegisterResponse>("/auth/register", data);
};

export const postLoginUser = async (data: {
  username: string;
  password: string;
}) => {
  return axios.post<PostLoginResponse>("/auth/login", data);
};
