import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
