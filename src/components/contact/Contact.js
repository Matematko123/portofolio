import React from 'react';

import styles from './Contact.module.css';

import Container from '../reusable/Container';
import PrimaryButton from '../reusable/PrimaryButton';

function Contact() {
  return (
    <div className={styles.wrapper} id="contact">
      <Container>
        <div className={styles.container}>
          <h1 className={styles.titleText}>Contact</h1>
          <form
            action="mailto:alilovicmatija@gmail.com"
            name="EmailForm"
            className={styles.form}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
            <label htmlFor="subject">Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder=""
              required
            ></textarea>
            <PrimaryButton type="submit">Send</PrimaryButton>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
