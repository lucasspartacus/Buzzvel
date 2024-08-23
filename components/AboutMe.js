import Timeline from './Timeline';
import WhyBuzzvel from './WhyBuzzvel';
import styles from '../styles/about.module.css';

const AboutMe = () => {
  return (
    <section id="about" className={styles.about}>
   
      <Timeline />
      <WhyBuzzvel />
    </section>
  );
};

export default AboutMe;
