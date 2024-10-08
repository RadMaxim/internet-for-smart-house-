import { memo } from "react";
import { CardsSection3I } from "../../../InterfaceAll/Interface";
import Paragraph from "../../../Paragraph/Paragraph";
import Share from "../../../Share/Share";
import classCardsSection3 from "./css/classCardsSection3.module.css";

const CardsSection3 = memo(({ img, header, desc }: CardsSection3I) => {
  return (
    <li className={classCardsSection3.li}>
      <div className={classCardsSection3.img}>
        <img src={img} alt="" />
      </div>
      <div className={classCardsSection3.head}>
        <h3>{header}</h3>
      </div>
      <div className={classCardsSection3.desc}>
        <Paragraph color={2}>{desc}</Paragraph>
      </div>
      <div className={classCardsSection3.wait}>
        <Share />
      </div>
    </li>
  );
});
export default CardsSection3;
