import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/projects.module.css';

// List of images and descriptions
const slides = [
  { src: '/images/project1.jpg', description: `Buzzvel analyzed the client's project and sought to present a strategy to respond to PTC's primary need and also idealized the optimization, speed and effectiveness of existing processes, driving the evolution of the project.`, title: 'DBS' },
  { src: '/images/project2.png', description: `Our team worked diligently to create a website that is visually appealing, user- friendly, easy to navigate, and built with security in mind.`, title: 'Traquinices'  },
  { src: '/images/project3.png', description: `We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.`, title: 'Viplant'  },
  { src: '/images/project4.png', description: `Buzzvel analyzed the client's project and sought to present a strategy to respond to Hotspotty's primary needs and executed accordingly by working closely with the Hotspotty team.`, title: 'Hotspotty'  },
  { src: '/images/project5.png', description: `Buzzvel conducted a needs analysis with the client and presented a solution for developing a CRM platform for internal use based on Coma ou Leve's immediate needs (an easy and quick ordering process).`, title: 'Coma ou Leve '  },
  { src: '/images/project6.png', description: `A Landing Page designed and developed with a carefully crafted image, seeking to convey luxury, provide all the information. about the unique qualities of the condominium, and make available the appropriate contacts and a form for= clarification of doubts.`, title: 'Vigias da Arriba'  },
  { src: '/images/project7.png', description: `The minimalist design allows the user to use the application without training. ThinkFeridas is the combination of critical judgment from a range of experts on a mobile app.`, title: 'ThinkFeridas'  },
  { src: '/images/project8.png', description: `Buzzvel, in partnership with the agency COMON, carried out a needs analysis to produce an effective online store/E- commerce, clean and intuitive.`, title: 'Miss Can '  }

];

const ProjectsSlideshow = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    customPaging: (i) => (
      <div className={styles.dot}></div>
    ),
  };

  return (
    <section id="projects" >
      <div className={styles.slideshow}>
            <h2>Buzzvel Projects</h2>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={slide.src} 
                      alt={`Project ${index + 1}`} 
                      width={514} 
                      height={614} 
                      className={styles.image} 
                    />
                  </div>
              
                  <div className={styles.description}>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
    </section>
  );
};

export default ProjectsSlideshow;
