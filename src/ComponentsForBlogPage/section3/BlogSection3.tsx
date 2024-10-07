import { useContext } from "react";
import Heading from "../../Heading/Heading";
import CardsSection3 from "./cards/CardsSection3";
import { cards } from "./cardsSection3";
import classBlogSection3 from "./css/classBlogSection3.module.css";
import Paginator from "./Paginator/Paginator";
import { Paginators } from "../../Context/Context";

const BlogSection3 = () => {
  const context = useContext(Paginators);
  if (!context) {
    throw new Error("Paginators");
  }
  const { num } = context;
  return (
    <>
      <section className={classBlogSection3.section3}>
        <div className={classBlogSection3.section3_container}>
          <div className={classBlogSection3.section3_title}>
            <Heading lvl={2} size={"1.25rem"} color={4}>
              ALL ARTICLE
            </Heading>
          </div>
          <ul className={classBlogSection3.ul}>
            {cards[num].map((elem, index) => (
              <CardsSection3 key={index} {...elem} />
            ))}
          </ul>
          <Paginator />
        </div>
      </section>
    </>
  );
};
export default BlogSection3;
