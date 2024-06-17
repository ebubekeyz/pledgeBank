import Wrapper from '../assets/Contact';

const Contacts = () => {
  document.title = `Contact`;
  return (
    <Wrapper>
      <img
        src="/contact.webp"
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />
      <section className="section single-page">
        {/* section title  */}
        <div className="section-title">
          <h1>Contact Us</h1>
          <div className="underline"></div>
        </div>
        {/* end of section title */}
        <div className="section-center page-info">
          {/* contact page */}
          <p style={{ textAlign: 'center' }}>
            Feel free to email us at{' '}
            <span style={{ color: 'var(--clr-primary-4)' }}>
              team.pledge.bank@gmail.com
            </span>{' '}
            for any enquiry on our services.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
export default Contacts;
