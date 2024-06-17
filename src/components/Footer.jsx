import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa6';
import Wrapper from '../assets/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [footer, setFooter] = useState(new Date().getFullYear());

  return (
    <Wrapper>
      <footer className="footer">
        {/* social icons  */}
        <ul className="social-icons">
          <li>
            <Link to="/privacy" className="link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="link">
              Terms And Conditions
            </Link>
          </li>
        </ul>

        <p>
          &copy; <span id="date">{footer}</span> pledge-bank.online. all rights
          reserved
        </p>
      </footer>
    </Wrapper>
  );
};
export default Footer;
