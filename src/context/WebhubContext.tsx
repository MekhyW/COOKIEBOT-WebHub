import React, { createContext, useContext, useState, useEffect } from 'react';

const WebhubContext = createContext<any>(null);

export function WebhubProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <WebhubContext.Provider value={{ language, setLanguage }}>
      {children}
    </WebhubContext.Provider>
  );
}

export function useWebhubContext() {
  return useContext(WebhubContext);
}
