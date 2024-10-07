// import { cards } from "./cards/cards";
import CardsBlog from "./cards/CardsBlog";
import classBlogSection2 from "./css/classBlogSection2.module.css";
import img from "./../../../public/img/BlogPage/Rectangle 5.png";
import { cards } from "./cards/cards";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import Share from "../../Share/Share";

// import { cards } from "../section3/cardsSection3";
const BlogSection2 = () => {
  return (
    <>
      <section className={classBlogSection2.section2}>
        <div className={classBlogSection2.section2_container}>
          <div className={classBlogSection2.section2_container_top}>
            <section className={classBlogSection2.section_1}>
              <input type="text" />
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
              <Paragraph color={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                posuere nibh tempor fringilla porta pellentesque ipsum.
              </Paragraph>
              <Share />
            </section>
            <section className={classBlogSection2.section_4}>
              <img src={img} alt="" />
            </section>
          </div>
          <div className={classBlogSection2.section2_container_bottom}></div>
          <ul>
            {cards.map((elem, index) => {
              return <CardsBlog key={index} {...elem} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
export default BlogSection2;
