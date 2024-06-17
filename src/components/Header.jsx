import { Link } from 'react-router-dom';
import Wrapper from '../assets/Header';
import hero from '../assets/hero-img.png';

const Header = () => {
  return (
    <Wrapper>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="anim">
              {' '}
              <div className="underline"></div>
              <h1>i'm Joseph</h1>
              <h4>freelance web & mobile App Developer</h4>
              <Link to="/request-form" className="btn hero-btn">
                hire me
              </Link>
            </div>
            {/* social icons  */}
            <ul className="social-icons hero-icons">
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-squarespace"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img">
            <img src={hero} className="hero-photo" alt="Ebube Offor" />
          </article>
        </div>
      </header>
    </Wrapper>
  );
};
export default Header;
