import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../button/Button";
import classForm from "./css/classForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ValidationYUP/yup";
import Paragraph from "../../../Paragraph/Paragraph";

export interface FormData {
  Full_Name: string;
  Email: string;
  textArea: string;
}
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const send: SubmitHandler<FormData> = (data) => {
    const idb = window.indexedDB;
    if (!idb) {
      throw new Error("mistake of idb");
    }
    const request = idb.open(" test-db", 1);
    request.onerror = function (event) {
      console.error(" Произошла ошибка IndexedDB");
      console.error(event);
    };
    console.log("err");
    console.log(request.onupgradeneeded);
    console.log(data);
    
   
  };
  return (
    <>
      <form onSubmit={handleSubmit(send)} action="#">
        <fieldset>
          <div className={classForm.form_Section}>
            <label htmlFor="Full_Name">Full Name</label>
            <input
              {...register("Full_Name")}
              id="Full_Name"
              type="text"
              required
              placeholder="Your Name"
            />
            <Paragraph color={5}>{errors.Full_Name?.message || ""}</Paragraph>
          </div>
          <legend>SEND US MESSAGE</legend>
          <div className={classForm.form_Section}>
            <label htmlFor="Email">Email</label>
            <input
              {...register("Email")}
              type="email"
              id="Email"
              placeholder="Your Email"
            />
            <Paragraph color={5}>{errors.Email?.message || ""}</Paragraph>
          </div>
          <div className={classForm.form_Section}>
            <label htmlFor="Message">Message</label>
            <textarea
              {...register("textArea")}
              spellCheck
              rows={5}
              cols={30}
              id="Message"
              placeholder="Your Message"
            ></textarea>
            <Paragraph color={5}>{errors.textArea?.message || ""}</Paragraph>
          </div>
          <Button text="SUBMIT" w={"100"} h={72} />
        </fieldset>
      </form>
    </>
  );
};
export default Form;
