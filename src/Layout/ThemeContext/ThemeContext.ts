import React, { createContext } from "react";

export interface Theme {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}
export interface ImageHit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

// Интерфейс для всего ответа от API
export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: ImageHit[]; // Массив изображений
}
export interface Array_img{
  array_img:ImageHit[]|null;
  set_array_img:React.Dispatch<React.SetStateAction<ImageHit[]|null>>
}



export const Theme = createContext<Theme | null>(null);
export const PixabayResponse = createContext<Array_img|null>(null)
