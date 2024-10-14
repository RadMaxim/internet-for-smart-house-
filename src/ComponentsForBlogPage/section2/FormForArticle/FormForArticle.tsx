import { CiSearch } from "react-icons/ci";
import classFormForArticle from "./css/classFormForArticle.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import SearchIMG from "../../../MyHooks/SearchIMG";
import { ImageHit } from "../../../Layout/ThemeContext/ThemeContext";
import Loader from "../../../router/Loader/Loader";
export interface BlogSection2 {
  search: string;
}
const receiveData = async (search: string): Promise<ImageHit[] | null> => {
  const step1 = await fetch(
    `https://pixabay.com/api/?key=43093131-6aaad8110d954fdeab2747c5d&category=${search}`,
  );
  if (!step1.ok) {
    return null;
  }
  const step2 = await step1.json();

  return step2?.hits;
};

const FormForArticle = () => {
 
  
  const { set_array_img } = SearchIMG();
  const [state, setState] = useState<string>("education");
  const queryClient = useQueryClient();
  const { isFetched } = useQuery(
    ["array_img", state],
    () => receiveData(state),
    {
      onSuccess: (data) => {
        if (data) {
          set_array_img(data);

          return;
        }

        set_array_img(null);
      },
      cacheTime: 60000,
    },
  );

  useEffect(() => {
    queryClient.invalidateQueries(["array_img", state]);
  }, [state, queryClient]);

  const { register, handleSubmit } = useForm<BlogSection2>();
  const handle: SubmitHandler<BlogSection2> = (info) => {
    setState(info.search);
  };
  if (!isFetched) {
    return (
      <div className={classFormForArticle.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <form className={classFormForArticle.form} onSubmit={handleSubmit(handle)}>
      <input
        className={classFormForArticle.input}
        type="text"
        {...register("search")}
      />
      <button type="submit">
        <CiSearch />
      </button>
    </form>
  );
};
export default FormForArticle;
