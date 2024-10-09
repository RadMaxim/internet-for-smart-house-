import Button from "../../button/Button";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import classSection1 from "./css/classSection1.module.css";
import {
  img1,
  mainIMG,
  img3,
  img4,
  img5,
  img8,
  img9,
  img11,
  img12,
} from "./getImgs";

const Section1 = () => {
  return (
    <>
      <section className={classSection1.section1}>
        <div className={classSection1.section1_container}>
          <div className={classSection1.left}>
            <Heading lvl={1} size={"3.3rem"} color={2}>
              New Automation Tool for Your Home
            </Heading>
            <Paragraph color={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              tristique vulputate ultrices ut mauris tellus at. Posuere
              sollicitudin odio tellus elit.
            </Paragraph>
            <div>
              <Button text="See Our Project" w={220} h={56} />
            </div>
          </div>
          <div className={classSection1.right}>
            <img className={classSection1.mainImg} src={mainIMG} alt="" />
            <div className={classSection1.grid_img}>
              <div className={classSection1.top_imgs}>
                <div className={classSection1.top_imgs_container}>
                  <div className={classSection1.helper_img}>
                    <img id="img1" src={img1} alt="" />
                  </div>
                  <img id="img7" src={img8} alt="" />
                  <img id="img8" src={img9} alt="" />
                  <img id="img10" src={img11} alt="" />
                  <img id="img11" src={img12} alt="" />
                </div>
              </div>
              <div className={classSection1.bottom_imgs}>
                <div>
                  <img id="img2" src={img3} alt="" />
                </div>
                <div>
                  <img id="man" src={img4} alt="" />
                </div>
                <div>
                  <img id="woman" src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section1;
