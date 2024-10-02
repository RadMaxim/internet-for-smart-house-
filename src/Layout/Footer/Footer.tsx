import Button from "../../button/Button";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import TextAnd_Icon from "../../TextAnd_Icon/TextAnd_Icon";
import classFooter from "./css/classFooter.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={classFooter.footer_container}>
          <div className={classFooter.top}>
            <div className={classFooter.top_left}>
              <Heading
                color={1}
                text="Intersted to woek with our team?"
                lvl={2}
                size={"2.25rem"}
              />
              <Paragraph
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
             "
                color={1}
              />
            </div>
            <div className={classFooter.top_right}>
              <Button w={"100"} h={56} text="Let’s Talk" />
            </div>
          </div>
          <div className={classFooter.center}>
            <div className={classFooter.line_container}></div>
          </div>
          <div className={classFooter.bottom}>
            <div className={classFooter.head1}>
              <TextAnd_Icon text="Afrianska" IMG="twoCircle" place="left" />
            </div>
            <div className={classFooter.head2}>
              <Heading text="About US" color={1} size={"1.25rem"} lvl={3} />
            </div>
            <div className={classFooter.head3}>
              <Heading text="Follow US" color={1} size={"1.25rem"} lvl={3} />
            </div>
            <div className={classFooter.cont1}>
              <TextAnd_Icon
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                IMG="A."
                place="left"
              />
              <TextAnd_Icon text="+62-812-7313-4321" IMG="T." place="left" />
              <TextAnd_Icon
                text="hello.afrian@gmail.com"
                IMG="E."
                place="left"
              />
            </div>
            <div className={classFooter.cont2}>
              <Paragraph button text="About" color={1} />
              <Paragraph button text="What We Do" color={1} />
              <Paragraph button text="Project" color={1} />
              <Paragraph button text="How It Work With Us" color={1} />
            </div>
            <div className={classFooter.cont3}>
              <Paragraph button text="Instagram" color={1} />
              <Paragraph button text="Facebook" color={1} />
              <Paragraph button text="LinkedIn" color={1} />
              <Paragraph button text="Youtube" color={1} />
            </div>

            <div className={classFooter.bottoms}></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
