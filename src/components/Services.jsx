import { FaAndroid, FaCode, FaSketch } from 'react-icons/fa6';
import Wrapper from '../assets/Services';
import { Link } from 'react-router-dom';
import { service } from '../utils';

const Services = () => {
  return (
    <Wrapper>
      <section className="section bg-grey">
        {/* section title */}
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        {/* end of section title  */}
        <div className="services-center section-center">
          {service.map((item) => {
            const { id, text, title } = item;
            return (
              <article key={id} className="service">
                <Link
                  to={`/singleService/${id}`}
                  style={{ color: 'var(--clr-grey-1)' }}
                >
                  {' '}
                  <FaCode />
                  <h4>{title}</h4>
                  <div className="underline"></div>
                  <p>{text}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};
export default Services;
