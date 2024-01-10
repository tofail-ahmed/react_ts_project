import { ReactNode, createContext, useContext } from "react";

export const MenuContext = createContext(null || String);
export type TMenuListProps = {
  children: ReactNode;
};
export const MenuList = ({ children }: TMenuListProps) => {
  return (
    <MenuContext.Provider value={{ theme: "Dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};
export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return <div>MenuItem</div>;
};
