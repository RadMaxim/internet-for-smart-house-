import React from "react";
import classGrid_Helper from "./css/classGrid_Helper.module.css";
export interface Grid_Helper {
  children: React.ReactNode;
}

const Grid_Helper = ({ children }: Grid_Helper) => {
  return (
    <>
      <section className={classGrid_Helper.main}>
        <div></div>
        <div>{children}</div>
        <div></div>
      </section>
    </>
  );
};
export default Grid_Helper;
