import Heading from "../../Heading/Heading";
import TextAnd_Icon from "../../TextAnd_Icon/TextAnd_Icon";
import CardsSection3 from "./cards/CardsSection3";
import { cards } from "./cardsSection3";
import classBlogSection3 from "./css/classBlogSection3.module.css";

const BlogSection3 = () => {
  return (
    <>
      <section className={classBlogSection3.section3}>
        <div className={classBlogSection3.section3_container}>
          <div className={classBlogSection3.section3_title}>
          <Heading text="ALL ARTICLE" lvl={2} size={"1.25rem"} color={4}/>
            </div>
          <ul className={classBlogSection3.ul}>
            {cards.map((elem, index) => (
              <CardsSection3 key={index} {...elem} />
            ))}
          </ul>
          <div className={classBlogSection3.paginator}>
            <TextAnd_Icon IMG="arrowLeft" text="New Post" place="left" />
            <TextAnd_Icon IMG="arrowRight" text="Old Post" place="right" />
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogSection3;
