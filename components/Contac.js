import React from 'react';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import dayjs from 'dayjs';
import "react-datepicker/dist/react-datepicker.css"; // Import the default CSS first
import styles from '../styles/LandingPage.module.css'; // Then import your custom styles


const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17').toDate());

  return (
    <div id='contactme' className={styles.Contact}>
      
      <section  className={styles.introduction}>
        <h2 className={styles.titlecontact}>Contact</h2> 
        <p className="intro">Contact me for more information</p>
      </section>
      <section>
        <form className={styles.form}>
          <label>Email</label>
          <input placeholder='Write your email' className={styles.email} type="email" />
          <label>Data entrevista</label>
          <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className={styles.datePicker} // Apply your custom styles here
          />
          <button className={styles.button} type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
