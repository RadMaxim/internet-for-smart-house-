import { useContext } from "react";
import { Theme } from "../Layout/ThemeContext/ThemeContext";
const useTheme = () => {
  const contextTheme = useContext(Theme);
  if (!contextTheme) {
    throw new Error("Mistake");
  }
  return contextTheme;
};
export default useTheme;
