import { createContext } from "react";

export interface Theme{
    theme : "dark"|"light",
    setTheme: React.Dispatch<React.SetStateAction<"dark"|"light">>
}
export const Theme = createContext<Theme|null>(null);