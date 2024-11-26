import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Rating } from '@mui/material';

function ContactUs() {
    const form = useRef();
    const [value, setValue] = React.useState(2);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_5lkkp19', 'template_edk8e4s', form.current, {
          publicKey: 'zfRxFdfSmqylomFST',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="from_name" /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {/* <input type="range" name="rating" min={1} max={5}/><br /> */}
      <input type="submit" value="Send" />
    </form>
  )
}

export default ContactUs