import { CiSearch } from "react-icons/ci";
import classFormForArticle from "./css/classFormForArticle.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";
import SearchIMG from "../../../MyHooks/SearchIMG";
import Loader from "../../../router/Loader/Loader";
import useHookQuery from "../../../MyHooks/QueryHooks";
export interface BlogSection2 {
  search: string;
}

const FormForArticle = () => {
  const { set_array_img } = SearchIMG();
  const [state, setState] = useState<string>("education");
  const { isFetched } = useHookQuery({
    state: state,
    set_array_img: set_array_img,
  });
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
