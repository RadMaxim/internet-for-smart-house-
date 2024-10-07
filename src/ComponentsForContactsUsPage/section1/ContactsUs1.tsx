import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import classContactsUs1 from "./css/classContactsUs1.module.css";

const ContactsUs1 = () => {
  return (
    <>
      <section className={classContactsUs1.section1}>
        <div className={classContactsUs1.section1_container}>
          <div className={classContactsUs1.heading}>
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
};
export default ContactsUs1;
