import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/LandingPage.module.css';
import hero from '../public/images/hero-photo.jpg'
import Image from 'next/image';

const LandingPage = () => {
  useEffect(() => {
    // GSAP animations for the introduction and hero section
    gsap.fromTo('.intro', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo('.heroText', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    
    gsap.fromTo('.heroimage', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className={styles.landingPage}>
      <section className={styles.introduction}>
        <h1 className="intro">Hello, I&aposm <span className='hoveraboutme'> Lucas Spartacus</span> </h1> 
        <h2 className="intro">Full Stack Developer</h2>
        <p className="intro">Welcome to my microsite!</p>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className="heroText">Innovative Solutions for the Modern World</h1>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src={hero}
            width={292}
            height={516}
            className="heroimage"
            alt='Image Lucas Spartacus LandingPage'
          />
        </div>
      </section>
    
   
    </div>
  );
};

export default LandingPage;
