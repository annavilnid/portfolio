import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import s from './Contacts.module.css'
import Subtitle from "../Subtitle/Subtitle";

const Contacts = () => {
  const form: any = useRef();

  console.log(process.env.REACT_APP_SERVICE_ID)

  const sendEmail = (e: any) => {
    e.preventDefault();

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
        {/*<label>Name</label>*/}
        <input
          type='text'
          name='user_name'
          className={s.contacts__input}
          placeholder='Name'/>
        {/*<label>Email</label>*/}
        <input
          type='email'
          name='user_email'
          className={s.contacts__input}
          placeholder='Email'
        />
        {/*<label>Message</label>*/}
        <textarea
          name='message'
          className={s.contacts__textarea}
          placeholder='Message'
        />
        <input
          type='submit'
          value='Send'
          className={s.contacts__button}
        />
      </form>
    </div>
  );
};

export default Contacts;