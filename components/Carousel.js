import Slider from 'react-slick';
import styles from '../styles/projects.module.css';
import logo from '../public/images/hero-bg.png'
const ProjectsSlideshow = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2>Buzzvel Projects</h2>
      <Slider {...settings}>
      

  
        <div>
          <img src={logo} alt="Project 2" />
          <h3>Traquinices</h3>
          <p>Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.</p>
        </div>
        <div>
          <img src="./public/images/hero-bg.png" alt="Project 1" />
          <h3>Viplant</h3>
          <p>We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.1</p>
        </div>
        <div>
          <img src="/project2.jpg" alt="Project 2" />
          <h3>Hotspotty</h3>
          <p>An innovative &quot;All-in-One&quot; platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.</p>
        </div>
        <div>
          <img src="./public/images/hero-bg.png" alt="Project 1" />
          <h3>Coma ou Leve </h3>
          <p>An original concept, on the market since 1976. Meals ready to eat, with a history that stay in the memory of those who visit them.</p>
        </div>
        <div>
          <img src="/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        <div>
          <img src="./public/images/hero-bg.png" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div>
          <img src="/project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
       
      </Slider>
    </section>
  );
};

export default ProjectsSlideshow;
