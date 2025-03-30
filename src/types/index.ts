export * from "./table";
export * from "./loan";
export type ApiResponse<T> = {
  status: string;
  data: T;
};

export type PostRegisterResponse = ApiResponse<{
  token: string;
  user: {
      id: string;
      username: string;
      password: string;
      email: string;
      user_role: string;
      phone_number: string;
    };
  }>;
  
  export type PostLoginResponse = ApiResponse<{
    token: string;
    user: {
      id: string;
      username: string;
      password: string;
      email: string;
      user_role: string;
      phone_number: string;
  };
}>;
