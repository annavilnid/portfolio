import React, {FormEvent, useRef} from 'react';
import emailjs from 'emailjs-com';
import s from './Contacts.module.scss'
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current == null) return;
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', form.current, process.env.REACT_APP_PUBLIC_KEY || '')
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
  };

  return (
    <div className={s.contacts}>
      <form ref={form} onSubmit={sendEmail} className={s.contacts__form}>
        <input
          className={s.contacts__input}
          type='text'
          name='user_name'
          placeholder='Name'/>
        <input
          type='email'
          className={s.contacts__input}
          name='user_email'
          placeholder='Email'
        />
        <textarea
          className={s.contacts__textarea}
          name='message'
          placeholder='Message'
        />
        <AnimatedButton
            type='submit'
            value='Send'
        />
      </form>
    </div>
  );
};

export default Contacts;