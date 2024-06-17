import { Link } from 'react-router-dom';
import Wrapper from '../assets/AboutHome';
import aboutImg from '../assets/about-img.jpeg';

const About = () => {
  return (
    <Wrapper>
      <section className="section about">
        <div className="section-center about-center">
          {/* about img  */}
          <article className="about-img">
            <img src="/manager.avif" className="hero-photo" alt="about img" />
          </article>
          {/* about info  */}
          <article className="about-info">
            {/* section title  */}
            <div className="section-title about-title text-anim">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            {/* end of section title  */}
            <p>
              At Pledge Bank, we are committed to providing exceptional banking
              services tailored to meet the diverse needs of our customers. With
              a rich history and a forward-looking approach, we strive to be
              your trusted partner in financial growth and security.
            </p>
            <p>
              Our mission is to empower individuals, families, and businesses to
              achieve their financial goals. We believe in delivering innovative
              solutions, personalized service, and unparalleled convenience,
              ensuring that your banking experience is seamless and rewarding.
            </p>
            <Link to="/about" className="btn">
              about us
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
export default About;
