import { TextAnd_IconI } from "../InterfaceAll/Interface.ts";
import classTextAnd_Icon from "./css/classTextAnd_Icon.module.css";
import { glob, leftArrow, mail, phone, rightArrow } from "./getIcons.tsx";
import twoCircle from "./../../public/img/Layout/2_circle.svg";

const TextAnd_Icon = ({ text, IMG, place }: TextAnd_IconI) => {
  const elem = {
    text: text,
    IMG:
      IMG === "arrowLeft"
        ? leftArrow
        : IMG === "arrowRight"
          ? rightArrow
          : IMG === "glob"
            ? glob
            : IMG === "letter"
              ? mail
              : IMG === "phone"
                ? phone
                : IMG === "twoCircle"
                  ? twoCircle
                  : IMG,
    place: place,
    classN:
      IMG === "arrowLeft"
        ? "leftArrow"
        : IMG === "arrowRight"
          ? "rightArrow"
          : IMG === "glob"
            ? "glob"
            : IMG === "letter"
              ? "mail"
              : IMG === "phone"
                ? "phone"
                : IMG === "twoCircle"
                  ? "twoCircle"
                  : "texts",
  };
  if (elem.place === "right") {
    return (
      <>
        <p className={classTextAnd_Icon.divR}>
          {elem.text}
          <span>
            <img
              className={classTextAnd_Icon[elem.classN]}
              src={elem.IMG}
              alt=""
            />
          </span>
        </p>
      </>
    );
  }
  return (
    <>
      <div className={classTextAnd_Icon.divL}>
        <span>
          {elem.IMG !== IMG ? (
            <img
              src={elem.IMG}
              className={classTextAnd_Icon[elem.classN]}
              alt=""
            />
          ) : (
            <h3 className={classTextAnd_Icon[elem.classN]}>{IMG}</h3>
          )}
        </span>
        {elem.text}
      </div>
    </>
  );
};
export default TextAnd_Icon;
