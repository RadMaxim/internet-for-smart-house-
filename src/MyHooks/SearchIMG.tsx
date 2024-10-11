import { useContext } from "react";
import { PixabayResponse } from "../Layout/ThemeContext/ThemeContext";

const SearchIMG = () => {
  const context = useContext(PixabayResponse);
  if (!context) {
    throw new Error("PixabayResponse");
  }
  return context;
};
export default SearchIMG;
