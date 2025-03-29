import React from "react";

export interface user {
  token: string;
  id: string;
  username: string;
  password: string;
  email: string;
  user_role: string;
}
export interface IAuthContext {
  isAuthenticated: boolean;
  user: user | null;
  login: (data: user) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

const STORAGE_KEY = 'lumon_auth_user';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<user | null>(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const isAuthenticated = !!user;

  const logout = React.useCallback(async () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const login = React.useCallback(async (data: user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUser(data);
  }, []);

  // Sync localStorage with state changes
  React.useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

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
