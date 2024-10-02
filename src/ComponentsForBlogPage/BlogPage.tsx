import classBlogPage from "./css/classBlogPage.module.css";
import BlogSection1 from "./section1/BlogSection1";
import BlogSection2 from "./section2/BlogSection2";
import BlogSection3 from "./section3/BlogSection3";
import BlogSection4 from "./secton4/BlogSection4";

const BlogPage = () => {
  console.log("BlogPage");

  return (
    <>
      <main className={classBlogPage.main}>
        <BlogSection1 />
        <BlogSection2 />
        <BlogSection3 />
        <BlogSection4 />
      </main>
    </>
  );
};
export default BlogPage;
