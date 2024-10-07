import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Theme } from "./ThemeContext/ThemeContext";
import classMainLayout from './css/classMainLayout.module.scss'
const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<"light"|"dark">("light")
  
  return (
    <div className={classMainLayout[theme]}>
    <Theme.Provider value={{theme, setTheme}}>
      <Header />
      {children}
      <Footer />
      </Theme.Provider>
    </div>
  );
};
export default MainLayout;
