import React, { ReactNode, createContext, useState } from "react";
type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<TThemeContext | undefined>(undefined);
type TThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);
 const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
