import { Buttons } from "../InterfaceAll/Interface";
import classButton from "./css/classButton.module.css";

const Button = ({ text, w, h }: Buttons) => {
  const prop = {
    w: typeof w === "string" ? `${w}%` : `${w}px`,
    h: typeof h === "string" ? `${h}%` : `${h}px`,
  };
  return (
    <>
      <input
        className={classButton.input}
        style={{ width: prop.w, height: prop.h }}
        type="submit"
        value={text}
      />
    </>
  );
};
export default Button;
