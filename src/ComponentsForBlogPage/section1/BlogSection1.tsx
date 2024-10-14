import { memo } from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import classBlogSection1 from "./css/classBlogSection1.module.css";
import useTheme from "../../MyHooks/ThemeHooks";

const BlogSection1 = memo(() => {
  const {theme} = useTheme()
  console.log(theme);
  
  return (
    <>
      <section className={classBlogSection1[theme]}>
        <div className={classBlogSection1.section1_container}>
          <div className={classBlogSection1.heading}>
            <Heading positionX="center" lvl={1} color={1} size={"2.5rem"}>
              Blog Afrianska
            </Heading>
            <Paragraph positionX="center" color={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
});
export default BlogSection1;
