import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/timeline.module.css';

gsap.registerPlugin(ScrollTrigger);

const CareerTimeline = () => {
  useEffect(() => {
    gsap.fromTo('.timeline-item', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top center+=100', 
          end: 'bottom top',
          scrub: true,
          markers: false 
        }
      }
    );
  }, []);

  return (
    <div className={styles.timeline}>
      <h2>Experience</h2>
      <div className={styles.aboutmeContainer}>
      <div className={styles.aboutmeItem}>
          <div className={styles.year}>Professional Experience</div>
          <h3>Developer for the company It-eam</h3>
          <ul>
            <li>2022-2023</li>
            <li>Back-end development integrating the company&apos; system with functions in Python and JavaScript
            with a relational database.</li>
            <li>Assisted in the creation and maintenance of databases</li>
          </ul>
        </div>
        <div className={styles.aboutmeItem}>
          <div className={styles.year}>Academic experience</div>
          <h3>Bachelor of Computer Science</h3>
          <ul>
            <li>2019-2023</li>
            <li>Pontifical Catholic University of Minas Gerais</li>
          </ul>
          <h3>Postgraduate degree in Full Stack development</h3>
          <ul>
            <li>2024-Present</li>
            <li>Pontifical Catholic University of Minas Gerais</li>
          </ul>
        </div>
        
      </div>
      <h2>Career Timeline at Buzzvel</h2>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineItem}>
          <div className={styles.year}>Year 1</div>
          <h3>Foundation and Integration</h3>
          <ul>
            <li>Onboarding: Get familiar with Buzzvel’s processes, tools, and team.</li>
            <li>Mentorship: Work closely with a senior developer.</li>
            <li>Initial Contributions: Take on small tasks and learn the company’s coding standards.</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.year}>Year 2-3</div>
          <h3>Growth and Increased Responsibility</h3>
          <ul>
            <li>Project Ownership: Lead small to medium-sized projects.</li>
            <li>Skill Development: Master advanced concepts and possibly learn new technologies relevant to Buzzvel’s stack.</li>
            <li>Mentorship: Start mentoring junior developers.</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.year}>Year 4-5</div>
          <h3>Leadership and Innovation</h3>
          <ul>
            <li>Leadership Role: Potentially step into a team lead or senior developer role.</li>
            <li>Innovation: Contribute to the strategic direction of front-end development at Buzzvel.</li>
            <li>Continuous Learning: Stay updated with the latest industry trends and apply them at Buzzvel.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;
