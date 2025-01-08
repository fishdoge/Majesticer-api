import React, { createContext, ReactNode, useState } from "react";


interface AuthContextType {
  user: any;
  isLoggedIn: boolean;
  login: (user: any) => void;
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
  const [user, setUser] = useState<any>(null);
  const login = (user: any) => setUser(user);
  const logout = () => setUser(null);

  // Page 狀態
  const [pageState, setPageState] = useState<string>("home");
  const stateChange = (newPageState: string) => setPageState(newPageState);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
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