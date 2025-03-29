export * from "./table"
export * from "./loan"
export type ApiResponse<T> = {
  status: string;
  data: T;
};

export type PostRegisterResponse = ApiResponse<{
  id: string;
  username: string;
  email: string;
  user_role: string;
  credit_score: number;
}>;

export type PostLoginResponse = ApiResponse<{
  token: string;
  user: {
      id: string;
      username: string;
      password: string;
      email: string;
      user_role: string;
  };
}>;
