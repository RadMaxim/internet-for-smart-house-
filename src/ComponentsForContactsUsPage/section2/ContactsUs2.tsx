import Heading from "../../Heading/Heading";
import IMGLoadingLazy from "../../IMGLoadingLazy/IMGLoadingLazy";
import Paragraph from "../../Paragraph/Paragraph";
import TextAnd_Icon from "../../TextAnd_Icon/TextAnd_Icon";
import { imgMain } from "./contact";
import classContactsUs2 from "./css/classContactsUs2.module.css";
import Form from "./Form/Form";

const ContactsUs2 = () => {
  return (
    <>
      <section className={classContactsUs2.section2}>
        <div className={classContactsUs2.section2_container}>
          <address>
            <IMGLoadingLazy>
            <img src={imgMain} alt="" />
            
            </IMGLoadingLazy>

            <div>
              <Heading size={"1.25rem"} color={2} lvl={3}>
                ADDRESS
              </Heading>
              <Paragraph color={2}>
                Id convallis placerat sit sed duis id amet volutpat quam a,
                pharetra.
              </Paragraph>
            </div>
            <div>
              <Heading size={"1.25rem"} color={2} lvl={3}>
                PHONE
              </Heading>

              <TextAnd_Icon IMG="phone" place="left">
                +62-812-7313-4321
              </TextAnd_Icon>
              <TextAnd_Icon IMG="phone" place="left">
                +62-812-7313-4321
              </TextAnd_Icon>
            </div>
            <div>
              <Heading size={"1.25rem"} color={2} lvl={3}>
                ONLINE SERVICE
              </Heading>

              <TextAnd_Icon IMG="glob" place="left">
                www.afrianska.com
              </TextAnd_Icon>
              <TextAnd_Icon IMG="letter" place="left">
                hello.afrian@gmail.com
              </TextAnd_Icon>
            </div>
          </address>
          <Form />
        </div>
      </section>
    </>
  );
};
export default ContactsUs2;
