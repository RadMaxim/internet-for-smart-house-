import { useState } from "react";
import { Paginators } from "../Context/Context";
import classBlogPage from "./css/classBlogPage.module.css";
import BlogSection1 from "./section1/BlogSection1";
import BlogSection2 from "./section2/BlogSection2";
import BlogSection3 from "./section3/BlogSection3";
import BlogSection4 from "./secton4/BlogSection4";

const BlogPage = () => {
  const [num, setNum] = useState<number>(0);

  return (
    <>
      <Paginators.Provider value={{ num, setNum }}>
        <main className={classBlogPage.main}>
          <BlogSection1 />
          <BlogSection2 />
          <BlogSection3 />
          <BlogSection4 />
        </main>
      </Paginators.Provider>
    </>
  );
};
export default BlogPage;
