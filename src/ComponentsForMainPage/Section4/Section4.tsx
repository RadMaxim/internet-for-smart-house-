import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { clientCards } from "./ClientCards";
import classSection4 from "./css/classSection4.module.css";

const Section4 = () => {
  return (
    <>
      <section className={classSection4.section4}>
        <div className={classSection4.section4_container}>
          <div className={classSection4.section4_child1_container}>
            <div className={classSection4.section_top}>
              <Heading
                text="Our Beloved Client"
                lvl={2}
                color={1}
                size={"2.25rem"}
              />
              <Paragraph
                text="
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                "
                color={1}
              />
            </div>
            <div className={classSection4.section_bottom}>
              <ul>
                {clientCards.map((elem) => {
                  return (
                    <>
                      <div key={elem.logo}>{elem.logo}</div>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={classSection4.section4_child2_container}></div>
        </div>
      </section>
    </>
  );
};
export default Section4;
