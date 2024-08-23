import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import ProjectsSlideshow from '../components/ProjectsSlideshow';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';
import Head from 'next/head';

const Home = () => {
  return (
    
    <div>
      <Navbar />
      <LandingPage/>
      <AboutMe />
      <ProjectsSlideshow />
      <Footer/>
    </div>
  );
};

export default Home;
