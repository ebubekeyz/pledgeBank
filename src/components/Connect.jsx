import Wrapper from '../assets/Connect';

import video from '../assets/connect.mp4';
import { Link } from 'react-router-dom';

const Connect = () => {
  return (
    <Wrapper>
      <section className="connect">
        <video
          controls
          autoPlay
          muted
          loop
          className="video-container"
          poster="/project-1.jpeg"
        >
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <div className="video-banner">
          {/* section title  */}
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          {/* end of section title  */}
          <p className="video-text">
            Our support team is always on hand to take your queries and offer
            prompt resolutions to your tickets.
          </p>
          <Link to="/contacts" className="btn">
            contact us
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};
export default Connect;
