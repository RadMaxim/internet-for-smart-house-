
import Heading from "../../Heading/Heading";
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
            <div>
              <img src={imgMain} alt="" />
            </div>

            <div>
              <Heading text="ADDRESS" size={"1.25rem"} color={2} lvl={3} />
              <Paragraph
                text="Id convallis placerat sit sed duis id amet volutpat quam a,
                pharetra.
             "
                color={2}
              />
            </div>
            <div>
              <Heading text="PHONE" size={"1.25rem"} color={2} lvl={3} />

              <TextAnd_Icon IMG="phone" text="+62-812-7313-4321" place="left" />
              <TextAnd_Icon IMG="phone" text="+62-812-7313-4321" place="left" />
            </div>
            <div>
              <Heading
                text="ONLINE SERVICE"
                size={"1.25rem"}
                color={2}
                lvl={3}
              />

              <TextAnd_Icon IMG="glob" text="www.afrianska.com" place="left" />
              <TextAnd_Icon
                IMG="letter"
                text=" hello.afrian@gmail.com"
                place="left"
              />
            </div>
          </address>
         <Form/>
        </div>
      </section>
    </>
  );
};
export default ContactsUs2;
