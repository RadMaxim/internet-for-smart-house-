import classCardsBlog from "./css/classCardsBlog.module.css";
import { CardsBlogI } from "../../../InterfaceAll/Interface";
import Share from "../../../Share/Share";
import Heading from "../../../Heading/Heading";
import Paragraph from "../../../Paragraph/Paragraph";

const CardsBlog = ({ img, title, desc }: CardsBlogI) => {
  return (
    <>
      <section className={classCardsBlog.section}>
        <div>
          <img src={img} alt="" />
        </div>
        
       
          <Heading lvl={3} text={title} color={2} size={"1.5rem"} />
        
        
          <Paragraph color={5} text={desc} />
         
        <Share />
      </section>
    </>
  );
};
export default CardsBlog;
