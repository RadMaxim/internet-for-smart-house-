import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import classSection3 from "./css/classSection3.module.css";

const Section3 = () => {
  return (
    <>
      <section className={classSection3.section3}>
        <div className={classSection3.section3_container}>
          <section className={classSection3.card_header}>
            <Heading lvl={2} size={"2.25rem"} color={2}>
              Our Finished Project
            </Heading>
            <Paragraph color={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Paragraph>
          </section>
          <section className={classSection3.card_img}>
            <Heading size={"1.75rem"} color={1} lvl={2} positionX="right">
              Smart Home Installation
            </Heading>
            <Paragraph positionX="right" color={1}>
              In Muarakana Housing Estate
            </Paragraph>
          </section>
          <section className={classSection3.footer_img1}>
            <Heading size={"1.75rem"} color={1} lvl={2} positionX="right">
              Sparklite App
            </Heading>
            <Paragraph color={1} positionX="right">
              Marketplace
            </Paragraph>
          </section>

          <section className={classSection3.footer_img2}>
            <Heading size={"1.75rem"} color={1} lvl={2} positionX="right">
              Car-Rapetition App
            </Heading>

            <Paragraph color={1} positionX="right">
              Board
            </Paragraph>
          </section>
        </div>
      </section>
    </>
  );
};
export default Section3;
