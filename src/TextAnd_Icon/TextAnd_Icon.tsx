import { TextAnd_IconI } from "../InterfaceAll/Interface.ts";
import classTextAnd_Icon from "./css/classTextAnd_Icon.module.css";
import { glob, leftArrow, mail, phone, rightArrow } from "./getIcons.tsx";
import twoCircle from "./../../public/img/Layout/2_circle.svg";
import Heading from "../Heading/Heading.tsx";

const TextAnd_Icon = ({ IMG, place, children, color }: TextAnd_IconI) => {
  const elem = {
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
    color:
      color == 1
        ? "white"
        : color == 2
          ? "Blue_01"
          : color == 3
            ? "blue_02"
            : color == 4
              ? "blue_03"
              : color == 5
                ? "red"
                : "black",
  };
  if (elem.place === "right") {
    return (
      <>
        <div className={classTextAnd_Icon.divR}>
          {children}
          <span className={classTextAnd_Icon[elem.color]}>
            <img
              className={classTextAnd_Icon[elem.classN]}
              src={elem.IMG}
              alt=""
            />
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className={`${classTextAnd_Icon.divL} ${classTextAnd_Icon[elem.color]}`}
      >
        <span className={classTextAnd_Icon[elem.color]}>
          {elem.IMG !== IMG ? (
            <img
              src={elem.IMG}
              className={classTextAnd_Icon[elem.classN]}
              alt=""
            />
          ) : (
            <Heading size={"1rem"} color={color} lvl={1} positionX="left">
              {IMG}
            </Heading>
          )}
        </span>
        {children}
      </div>
    </>
  );
};
export default TextAnd_Icon;
