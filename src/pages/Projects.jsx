import { FaAndroid, FaCode, FaHouse, FaSketch } from 'react-icons/fa6';
import Wrapper from '../assets/Services';

import { Link } from 'react-router-dom';
import { Services } from '../components';

const Projects = () => {
  document.title = `Projects`;
  return (
    <>
      <img
        src="/services.webp"
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />
      <Services />
    </>
  );
};
export default Projects;
