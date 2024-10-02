import Heading from "../../../Heading/Heading";
import { CardSection2I } from "../../../InterfaceAll/Interface";
import Paragraph from "../../../Paragraph/Paragraph";
import TextAnd_Icon from "../../../TextAnd_Icon/TextAnd_Icon";
import classCardSection2 from "./css/classCardSection2.module.css";

const CardSection2 = ({ h3, IMG, desc }: CardSection2I) => {
  return (
    <>
      <section className={classCardSection2.card1}>
        <div className={classCardSection2.card1_container}>
          <div>
            <img src={IMG} alt="" />
          </div>
          <Heading lvl={3} color={2} text={h3} size={"1.25rem"} />
          <Paragraph text={desc} color={2} />
          <TextAnd_Icon text="Learn more" IMG="arrowRight" place="right" />
        </div>
      </section>
    </>
  );
};
export default CardSection2;
