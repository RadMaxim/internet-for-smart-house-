import Paragraph from "../Paragraph/Paragraph";
import classShare from "./css/classShare.module.css";
import { share1, share2 } from "./shareIcons";

const Share = () => {
  return (
    <>
      <div className={classShare.main}>
        <div className={classShare.left}>
          <Paragraph color={5}>Samatha Leuthex</Paragraph>
          <Paragraph color={5}>May 5, 3 min read</Paragraph>
        </div>
        <div className={classShare.right}>
          <img src={share1} alt="" />
          <img src={share2} alt="" />
        </div>
      </div>
    </>
  );
};
export default Share;
