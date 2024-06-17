import { Link } from 'react-router-dom';
import Wrapper from '../assets/ProjectsHome';

const Projects = () => {
  return (
    <Wrapper>
      <section className="section projects">
        {/* section title */}
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione
            molestiae dignissimos aliquid blanditiis architecto voluptates
            delectus voluptate animi nulla! Autem explicabo perspiciatis officia
            ea.
          </p>
        </div>
        {/* end of section title  */}
        <div className="section-center projects-center">
          {/* single project */}
          <Link to="/projects" className="project-1">
            <article className="project">
              <img
                src="/project-1.jpeg"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          {/* end of single project  */}
          {/* single project  */}
          <Link to="/projects" className="project-2">
            <article className="project">
              <img
                src="project-2.jpeg"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          {/* end of single project single project  */}
          <Link to="/projects" className="project-3">
            <article className="project">
              <img
                src="/project-3.jpeg"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          {/* end of single project single project  */}
          <Link to="/projects" className="project-4">
            <article className="project">
              <img
                src="/project-4.jpeg"
                alt="single project"
                className="project-img"
              />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>

          {/* end of single project  */}
        </div>
      </section>
    </Wrapper>
  );
};
export default Projects;
