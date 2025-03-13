import React, { createContext, ReactNode, useState } from "react";

type User = {
  name: string;
  apiKey?: string; // 新增 apiKey 欄位
};

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// 定義 WebsitePage 的型別
interface WebsitePageType {
  pageState: string;
  stateChange: (pageState: string) => void;
}

// 建立 Context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const WebsitePageContext = createContext<WebsitePageType>({
  pageState: "home",
  stateChange: () => {},
});

// Provider 組件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Auth 狀態
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // Page 狀態
  const [pageState, setPageState] = useState<string>("home");
  const stateChange = (newPageState: string) => setPageState(newPageState);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      <WebsitePageContext.Provider
        value={{
          pageState,
          stateChange,
        }}
      >
        {children}
      </WebsitePageContext.Provider>
    </AuthContext.Provider>
  );
};
