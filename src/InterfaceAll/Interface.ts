import React from "react";

export interface TextAnd_IconI {
  children: React.ReactNode;
  IMG: "arrowRight" | "arrowLeft" | "phone" | "glob" | "letter" | string;
  place: "right" | "left";
  color?: 1 | 2 | 3 | 4 | 5;
}
export interface CardSection2I {
  h3: string;
  IMG: string;
  desc: string;
}
export interface Buttons {
  text: string;
  w: number | string;
  h: number | string;
}
export interface CardsSection3I {
  img: string;
  header: string;
  desc: string;
}
export interface CardsBlogI {
  img: string;
  title: string;
  desc: string;
}
