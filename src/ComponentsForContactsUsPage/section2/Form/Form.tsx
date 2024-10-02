import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../../button/Button';
import classForm from './css/classForm.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './ValidationYUP/yup';
import Paragraph from '../../../Paragraph/Paragraph';

export interface FormData {
    Full_Name: string;
    Email: string;
    textArea: string;
  }
const Form = ()=>{
  
    const {register, handleSubmit,formState:{errors}} = useForm<FormData>({
      resolver:yupResolver(schema)
    });
    console.log(errors);
    
    const send:SubmitHandler<FormData> = (data)=>{
            console.log(errors);
            
        console.log(data);
        
    }
    return (<>
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
                  minLength={2}
                  maxLength={30}
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <Paragraph text={errors.Full_Name?.message||""} color={5}/>
              </div>
              <legend>SEND US MESSAGE</legend>
              <div className={classForm.form_Section}>
                <label htmlFor="Email">Email</label>
                <input
                {...register("Email")}
                 
                  type="email"
                  id="Email"
                  required
                  placeholder="Your Email"
                  minLength={4}
                  maxLength={30}
                />
                                <Paragraph text={errors.Email?.message||""} color={5}/>

              </div>
              <div className={classForm.form_Section}>
                <label htmlFor="Message">Message</label>
                <textarea
                {...register("textArea")}
            
                  spellCheck
                
                  rows={5}
                  cols={30}
                  id="Message"
                  required
                  placeholder="Your Message"
                ></textarea>
                                <Paragraph text={errors.textArea?.message||""} color={5}/>

              </div>
              <Button text="SUBMIT" w={"100"} h={72} />
            </fieldset>
          </form>
    
    </>)
}
export default Form;