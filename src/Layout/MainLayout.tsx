import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ImageHit, PixabayResponse, Theme } from "./ThemeContext/ThemeContext";
import classMainLayout from "./css/classMainLayout.module.scss";
import QueryReact from "./QueryReact/QueryReact";
import {ReactQueryDevtools} from 'react-query/devtools'
const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [array_img, set_array_img] = useState<ImageHit[]|null>(null)
  return (
  
    <QueryReact>
    <div className={classMainLayout[theme]}>
      <PixabayResponse.Provider value={{array_img,set_array_img}}>
      <Theme.Provider value={{ theme, setTheme }}>
        <Header />
        {children}
        <Footer />
      </Theme.Provider>
      </PixabayResponse.Provider>
    </div>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryReact>
   
  );
};
export default MainLayout;
