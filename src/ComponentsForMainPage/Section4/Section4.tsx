import React from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { clientCards } from "./ClientCards";
import classSection4 from "./css/classSection4.module.css";
const ListClient: React.FC = React.memo(() => {
  return (
    <ul>
      {clientCards.map((elem) => {
        return (
          <li key={elem.logo}>
            <Paragraph color={1}>{elem.logo}</Paragraph>
          </li>
        );
      })}
    </ul>
  );
});
const Section4: React.FC = React.memo(() => {
  return (
    <>
      <section className={classSection4.section4}>
        <div className={classSection4.section4_container}>
          <div className={classSection4.section4_child1_container}>
            <div className={classSection4.section_top}>
              <Heading lvl={2} color={1} size={"2.25rem"}>
                Our Beloved Client
              </Heading>
              <Paragraph color={1}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Paragraph>
            </div>
            <div className={classSection4.section_bottom}>
              <ListClient />
            </div>
          </div>
          <div className={classSection4.section4_child2_container}></div>
        </div>
      </section>
    </>
  );
});
export default Section4;
