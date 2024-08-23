import React from 'react';
import styles from '../styles/Footer.module.css';
import github from '../public/images/github.png'
import linkedin from '../public/images/linkedin.png'
import Buzzvel from '../public/images/Buzzvel-logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
      <section id="contact">
        <footer className={styles.footer}>
        <div className={styles.footercontent}> 
          <p>&copy; {new Date().getFullYear()} Lucas Spartacus Front-end test Buzzvel</p>
          <p href>
          <a href='https://buzzvel.com/'>
          <Image 
                src={Buzzvel} 
                alt={`Buzzvel logo footer`} 
                layout="responsive" 
                className={styles.image} 
              />
          </a>
          </p>
          <ul className={styles.footerlinks}>
            <a href='https://github.com/lucasspartacus'> <li><Image 
                src={github} 
                alt={`Github logo footer`} 
                layout="responsive" 
                id="github" className={styles.image} 
              /></li></a>
            <a href='https://www.linkedin.com/in/lucas-spartacus/'>
            <li><Image 
                src={linkedin} 
                alt={`Linkedin logo footer`} 
                layout="responsive" 
                id="linkedin" className={styles.image} 
              /></li>
            </a>      
          </ul>
        </div>
      </footer>
      </section>
      
    );
  };

export default Footer;
