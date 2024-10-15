import { useQuery } from "react-query";
import { ImageHit } from "../Layout/ThemeContext/ThemeContext";
import React from "react";
export interface UseHookQueryParams {
  state?: string;
  page?: number;
  set_array_img?: React.Dispatch<React.SetStateAction<ImageHit[] | null>>;
}
const receiveData = async (
  search?: string,
  page?: number,
): Promise<ImageHit[] | null> => {
  const step1 = await fetch(
    `https://pixabay.com/api/?key=43093131-6aaad8110d954fdeab2747c5d&category=${search}&page=${page ? page : 1}`,
  );
  if (!step1.ok) {
    return null;
  }
  const step2 = await step1.json();

  return step2?.hits;
};
const useHookQuery = ({ state, page, set_array_img }: UseHookQueryParams) => {
  return useQuery(["array_img", state, page], () => receiveData(state, page), {
    onSuccess: (data) => {
      if (!set_array_img) {
        return;
      }
      console.log("Success request");
      set_array_img(data ? data : null);
    },

    onError: () => {
      if (!set_array_img) {
        return;
      }
      set_array_img(null);
      console.log("Error");
    },
    staleTime: 5000,
    cacheTime: 60000,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};
export default useHookQuery;
