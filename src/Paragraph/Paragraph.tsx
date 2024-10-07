import React from "react";
import classParagraph from "./css/classParagraph.module.css";
export interface Paragraph {
  color: 1 | 2 | 3 | 4 | 5;
  button?: boolean;
  positionX?: "left" | "center" | "right";
  children: React.ReactNode;
}
const Paragraph = ({ color, button, positionX, children }: Paragraph) => {
  const parSetting = {
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
    position:
      positionX == "left"
        ? "left"
        : positionX == "center"
          ? "center"
          : positionX == "right"
            ? "right"
            : "",
  };

  return (
    <>
      <div className={classParagraph.mainP}>
        <p
          className={`${classParagraph[parSetting.color]} ${classParagraph[parSetting.position]} ${button ? classParagraph.link : classParagraph.p}`}
        >
          {children}
        </p>
      </div>
    </>
  );
};
export default Paragraph;
