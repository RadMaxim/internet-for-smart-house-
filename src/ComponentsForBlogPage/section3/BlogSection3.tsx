import { memo, useEffect, useState } from "react";
import Heading from "../../Heading/Heading";
import CardsSection3 from "./cards/CardsSection3";

import classBlogSection3 from "./css/classBlogSection3.module.css";
import Paginator from "./Paginator/Paginator";
import PaginatorsHooks from "../../MyHooks/PaginatorHooks";
import useHookQuery from "../../MyHooks/QueryHooks";
import { ImageHit } from "../../Layout/ThemeContext/ThemeContext";

const BlogSection3 = memo(() => {
  const { num } = PaginatorsHooks();
  const [img, setIMG] = useState<ImageHit[]>([])
  const { data } = useHookQuery({ page: Number(num) });
 
  useEffect(()=>{
    if (data) {
      setIMG(data)
    }
    else{
      setIMG([])
    }
     
  },[data])
  
 

  return (
    <>
      <section className={classBlogSection3.section3}>
        <div className={classBlogSection3.section3_container}>
          <div className={classBlogSection3.section3_title}>
            <Heading lvl={2} size={"1.25rem"} color={4}>
              ALL ARTICLE
            </Heading>
          </div>
          <ul  className={classBlogSection3.ul}>
            {
              img.map((elem: ImageHit) => (
                <CardsSection3 key={elem.id} {...elem} />
              ))}
          </ul>
          <Paginator  />
        </div>
      </section>
    </>
  );
});
export default BlogSection3;
