import { memo} from "react";
import Paragraph from "../../../Paragraph/Paragraph";
import Share from "../../../Share/Share";
import classCardsSection3 from "./css/classCardsSection3.module.css";
import { ImageHit } from "../../../Layout/ThemeContext/ThemeContext";
import IMGLoadingLazy from "../../../IMGLoadingLazy/IMGLoadingLazy";

const CardsSection3 = memo(({ webformatURL, tags}: ImageHit) => {


  
  return (
    <li  className={classCardsSection3.li}>
      <div className={classCardsSection3.img}>
        <IMGLoadingLazy>
        <img  src={webformatURL} alt="" />
        </IMGLoadingLazy>
      </div>
      <div className={classCardsSection3.head}>
        <h3>{tags}</h3>
      </div>
      <div className={classCardsSection3.desc}>
        <Paragraph color={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.
        </Paragraph>
      </div>
      <div className={classCardsSection3.wait}>
        <Share />
      </div>
    </li>
  );
});
export default CardsSection3;
