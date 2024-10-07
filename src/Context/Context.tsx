import React, { createContext } from "react";

// import classContext from './classContext.module.css'
export interface Paginator {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}
export const Paginators = createContext<Paginator | null>(null);
