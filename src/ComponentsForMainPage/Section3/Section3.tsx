import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import classSection3 from "./css/classSection3.module.css";

const Section3 = () => {
  return (
    <>
      <section className={classSection3.section3}>
        <div className={classSection3.section3_container}>
          <section className={classSection3.card_header}>
            <Heading
              lvl={2}
              size={"2.25rem"}
              text="Our Finished Project"
              color={2}
            />
            <Paragraph
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              "
              color={2}
            />
          </section>
          <section className={classSection3.card_img}>
            <Heading
              size={"1.75rem"}
              color={1}
              lvl={2}
              text="Smart Home Installation"
              positionX="right"
            />
            <Paragraph
              text="In Muarakana Housing Estate"
              positionX="right"
              color={1}
            />
          </section>
          <section className={classSection3.footer_img1}>
            <Heading
              size={"1.75rem"}
              color={1}
              lvl={2}
              text="Sparklite App"
              positionX="right"
            />
            <Paragraph text="Marketplace" color={1} positionX="right" />
          </section>
          <section className={classSection3.footer_img2}>
            <Heading
              size={"1.75rem"}
              color={1}
              lvl={2}
              text="Car-Rapetition App"
              positionX="right"
            />

            <Paragraph text="Board" color={1} positionX="right" />
          </section>
        </div>
      </section>
    </>
  );
};
export default Section3;
