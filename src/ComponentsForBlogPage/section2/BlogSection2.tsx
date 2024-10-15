// import { cards } from "./cards/cards";
import CardsBlog from "./cards/CardsBlog";
import classBlogSection2 from "./css/classBlogSection2.module.css";
import { cards } from "./cards/cards";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import Share from "../../Share/Share";
import { memo } from "react";
import FormForArticle from "./FormForArticle/FormForArticle";
import SearchIMG from "../../MyHooks/SearchIMG";
import IMGLoadingLazy from "../../IMGLoadingLazy/IMGLoadingLazy";

const BlogSection2 = memo(() => {
  const { array_img } = SearchIMG();
  const slice_array_img = array_img?.slice(0, 4);
  
  return (
    <>
      <section className={classBlogSection2.section2}>
        <div className={classBlogSection2.section2_container}>
          <div className={classBlogSection2.section2_container_top}>
            <section className={classBlogSection2.section_1}>
              <FormForArticle />
            </section>

            <section className={classBlogSection2.section_2}>
              <Heading lvl={2} size={"1.25rem"} color={4}>
                POPULAR
              </Heading>
            </section>
            <section className={classBlogSection2.section_3}>
              <Heading lvl={2} size={"3rem"} color={2}>
                Feugiat sodales at nullam tellus.
              </Heading>

              <Paragraph color={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                posuere nibh tempor fringilla porta pellentesque ipsum.
              </Paragraph>
              <Share />
            </section>
            <section className={classBlogSection2.section_4}>
               <IMGLoadingLazy><img
                src={slice_array_img && slice_array_img[0].largeImageURL}
                alt=""
              /></IMGLoadingLazy>
            </section>
          </div>
          <div className={classBlogSection2.section2_container_bottom}></div>
          <ul>
            {cards.map((elem, index) => {
              return (
                <CardsBlog
                  key={index}
                  {...elem}
                  img_test={
                    slice_array_img && slice_array_img[index + 1].largeImageURL
                  }
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
});
export default BlogSection2;
