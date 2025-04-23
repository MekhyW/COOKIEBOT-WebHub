import React, { createContext, useContext, useState, useEffect } from 'react';
import {getAccessToken} from "../configs/auth/token.ts";
import {setAccessToken as setLocalStorageAccessToken} from "../configs/auth/token.ts";

export type WebhubContextType = {
  language: string;
  setLanguage: (language: string) => void;
  accessToken: string | null;
  isLoggedIn: boolean;
  setAccessToken: (language: string) => void;
}

export const WebhubContext = createContext<WebhubContextType>({
  language: '',
  setLanguage: () => {},
  accessToken: null,
  isLoggedIn: false,
  setAccessToken: () => {}
});

export function WebhubProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'pt-BR';
  });

  const [accessToken, setAccessToken] = useState<string | null>(getAccessToken);
  const setContextAccessToken = (token: string) => {
    setAccessToken(token);
    setLocalStorageAccessToken(token)
    setIsLoggedIn(true);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return getAccessToken() !== null;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <WebhubContext.Provider value={{ language, setLanguage, accessToken, isLoggedIn, setAccessToken: setContextAccessToken }}>
      {children}
    </WebhubContext.Provider>
  );
}

export function useWebhubContext() {
  return useContext(WebhubContext);
}
