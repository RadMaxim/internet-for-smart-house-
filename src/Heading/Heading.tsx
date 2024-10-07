import React from "react";
import classHeading from "./css/classHeading.module.css";

export interface Heading {
  lvl: number;
  color?: 1 | 2 | 3 | 4 | 5;
  size: any;
  positionX?: "left" | "center" | "right";
  children: React.ReactNode;
}
const Heading = ({ lvl, color, size, positionX, children }: Heading) => {
  const elem = {
    lvl: lvl,
    color:
      color == 1
        ? "white"
        : color == 2
          ? "Blue_01"
          : color == 3
            ? "blue_02"
            : color == 4
              ? "blue_03"
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
      <div className={classHeading.mainHeading}>
        {lvl == 1 ? (
          <>
            <h1
              style={{ fontSize: size }}
              className={`${classHeading[elem.color]} ${classHeading[elem.position]}`}
            >
              {children}
            </h1>
          </>
        ) : lvl == 2 ? (
          <>
            <h2
              style={{ fontSize: size }}
              className={`${classHeading[elem.color]} ${classHeading[elem.position]}`}
            >
              {children}
            </h2>
          </>
        ) : (
          <>
            <h3
              style={{ fontSize: size }}
              className={`${classHeading[elem.color]} ${classHeading[elem.position]}`}
            >
              {children}
            </h3>
          </>
        )}
      </div>
    </>
  );
};
export default Heading;
