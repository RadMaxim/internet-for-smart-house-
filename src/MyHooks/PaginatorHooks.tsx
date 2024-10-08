import { useContext } from "react";
import { Paginators } from "../Context/Context";
const PaginatorsHooks = () => {
  const context = useContext(Paginators);
  if (!context) {
    throw new Error("Paginators");
  }
  return context;
};
export default PaginatorsHooks;
