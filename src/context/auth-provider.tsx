import { wait } from "@/lib/utils";
import React from "react";

export interface user {
  email: string;
  token: string;
}
export interface IAuthContext {
  isAuthenticated: boolean;
  login: (data: user) => Promise<void>;
  logout: () => Promise<void>;
  user: user | null;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

const key = "syka.auth.user";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<user | null>(null);
  const isAuthenticated = !!user;

  const logout = React.useCallback(async () => {
    await wait(250);

    setUser(null);
  }, []);

  const login = React.useCallback(async (data: user) => {
    await wait(500);

    setUser(data);
  }, []);

  React.useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthProvider;
