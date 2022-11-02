import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();
export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const handleLightTheme = () => {
    if (theme !== 'light') {
      setTheme('light');
    }
  };

  const handleDarkTheme = () => {
    if (theme !== 'dark') {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const themeStore = {
    theme: {
      valueTheme: theme,
      turnLightTheme: handleLightTheme,
      turnDarkTheme: handleDarkTheme,
    },
  };

  return (
    <ThemeContext.Provider value={{ themeStore: themeStore }}>
      {children}
    </ThemeContext.Provider>
  );
};
