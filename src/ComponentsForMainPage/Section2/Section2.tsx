import Heading from "../../Heading/Heading";
import { cardsArr } from "./cardsData";
import CardSection2 from "./CardSection2/CardSection2";
import classSection2 from "./css/classSection2.module.css";
const Section2 = () => {
  return (
    <>
      <section className={classSection2.section2}>
        <div className={classSection2.section2_container}>
          <section className={classSection2.card0}>
            <Heading
              lvl={2}
              text="What we do to help our client grow in digital era,"
              color={3}
              size={"2.25rem"}
            />
          </section>
          {cardsArr.map((elem, index) => (
            <CardSection2 key={index} {...elem} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Section2;
