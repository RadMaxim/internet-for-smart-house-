import classCardsBlog from "./css/classCardsBlog.module.css";
import { CardsBlogI } from "../../../InterfaceAll/Interface";
import Share from "../../../Share/Share";
import Heading from "../../../Heading/Heading";
import Paragraph from "../../../Paragraph/Paragraph";
import IMGLoadingLazy from "../../../IMGLoadingLazy/IMGLoadingLazy";

const CardsBlog = ({ title, desc, img_test }: CardsBlogI) => {
  return (
    <>
      <section className={classCardsBlog.section}>
        <IMGLoadingLazy>
        <img src={img_test} alt="" />
        
        </IMGLoadingLazy>

        <Heading lvl={3} color={2} size={"1.5rem"}>
          {title}{" "}
        </Heading>

        <Paragraph color={2}>{desc}</Paragraph>

        <Share />
      </section>
    </>
  );
};
export default CardsBlog;
