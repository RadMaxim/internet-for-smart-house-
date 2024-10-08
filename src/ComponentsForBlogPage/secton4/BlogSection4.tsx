import { memo } from "react";
import classBlogSection4 from "./css/classBlogSection4.module.css";

const BlogSection4 = memo(() => {
  return (
    <>
      <section className={classBlogSection4.section4}>
        <div className={classBlogSection4.section4_container}></div>
      </section>
    </>
  );
});
export default BlogSection4;
