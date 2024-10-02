import classContactsUs from "./css/classContactsUs.module.css";
import ContactsUs1 from "./section1/ContactsUs1";
import ContactsUs2 from "./section2/ContactsUs2";
import ContactsUs3 from "./section3/ContactsUs3";
import ContactsUs4 from "./section4/ContactsUs4";

const ContactsUs = () => {
  console.log("ContactsUs");

  return (
    <>
      <main className={classContactsUs.main}>
        <ContactsUs1 />
        <ContactsUs2 />
        <ContactsUs3 />
        <ContactsUs4 />
      </main>
    </>
  );
};
export default ContactsUs;
