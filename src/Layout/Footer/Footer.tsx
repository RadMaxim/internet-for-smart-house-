import { memo } from "react";
import Button from "../../button/Button";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import TextAnd_Icon from "../../TextAnd_Icon/TextAnd_Icon";
import classFooter from "./css/classFooter.module.css";

const Footer = memo(() => {
  return (
    <>
      <footer>
        <div className={classFooter.footer_container}>
          <div className={classFooter.top}>
            <div className={classFooter.top_left}>
              <Heading color={1} lvl={2} size={"2.25rem"}>
                Intersted to woek with our team?
              </Heading>
              <Paragraph color={1}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Paragraph>
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
              <TextAnd_Icon color={1} IMG="twoCircle" place="left">
                Afrianska
              </TextAnd_Icon>
            </div>
            <div className={classFooter.head2}>
              <Heading color={1} size={"1.25rem"} lvl={3}>
                About US
              </Heading>
            </div>
            <div className={classFooter.head3}>
              <Heading color={1} size={"1.25rem"} lvl={3}>
                Follow US
              </Heading>
            </div>
            <div className={classFooter.cont1}>
              <TextAnd_Icon IMG="A." color={1} place="left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </TextAnd_Icon>
              <TextAnd_Icon IMG="T." color={1} place="left">
                +62-812-7313-4321
              </TextAnd_Icon>
              <TextAnd_Icon IMG="E." color={1} place="left">
                hello.afrian@gmail.com
              </TextAnd_Icon>
            </div>
            <div className={classFooter.cont2}>
              <Paragraph button color={1}>
                About
              </Paragraph>
              <Paragraph button color={1}>
                What We Do
              </Paragraph>
              <Paragraph button color={1}>
                Project
              </Paragraph>
              <Paragraph button color={1}>
                How It Work With Us
              </Paragraph>
            </div>
            <div className={classFooter.cont3}>
              <Paragraph button color={1}>
                Instagram
              </Paragraph>
              <Paragraph button color={1}>
                Facebook
              </Paragraph>
              <Paragraph button color={1}>
                LinkedIn
              </Paragraph>
              <Paragraph button color={1}>
                Youtube
              </Paragraph>
            </div>

            <div className={classFooter.bottoms}></div>
          </div>
        </div>
      </footer>
    </>
  );
});
export default Footer;
