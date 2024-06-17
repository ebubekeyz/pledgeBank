import Wrapper from '../assets/About';
import { Carousel, Founders, MenuTab, Tab, Testimonies } from '../components';
import Faqs from '../components/Faqs';

const About = () => {
  document.title = `About`;
  return (
    <Wrapper>
      <img
        src="/about.jpg"
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />
      {/* <form action="http://www.google.com/translate">
        <input name="hl" value="en" type="hidden" />
        <input name="ie" value="UTF8" type="hidden" />
        <input name="langpair" value="" type="hidden" />
        <input
          name="langpair"
          value="en|fr"
          title="French"
          src="http://photos1.blogger.com/img/43/1633/320/13539949_e76af75976.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|de"
          title="German"
          src="http://photos1.blogger.com/img/43/1633/320/13539933_041ca1eda2.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|it"
          title="Italian"
          src="http://photos1.blogger.com/img/43/1633/320/13539953_0384ccecf9.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|pt"
          title="Portuguese"
          src="http://photos1.blogger.com/img/43/1633/320/13539966_0d09b410b5.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|es"
          title="Spanish"
          src="http://photos1.blogger.com/img/43/1633/320/13539946_2fabed0dbf.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|ja"
          title="Japanese"
          src="http://photos1.blogger.com/img/43/1633/320/13539955_925e6683c8.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|ko"
          title="Korean"
          src="http://photos1.blogger.com/img/43/1633/320/13539958_3c3b482c95.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|zh-CN"
          title="Chinese Simplified"
          src="http://photos1.blogger.com/img/43/1633/320/14324441_5ca5ce3423.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair2"
          value="en|ar"
          title="Arabic"
          src="http://photos1.blogger.com/blogger/3709/485/1600/arabic-flag.gif"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
      </form> */}

      <main style={{ textAlign: 'justify' }}>
        <section className="section single-page">
          {/* section title  */}
          <div className="section-title">
            <h2>Who We Are</h2>
            <div className="underline"></div>
          </div>
          {/* end of section title  */}
          <div
            className="section-center page-info"
            style={{ textAlign: 'center' }}
          >
            {/* about page  */}
            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Welcome to Pledge Bank Plc, Your Financial Partner
            </h3>
            <p>
              At Pledge Bank, we are committed to providing exceptional banking
              services tailored to meet the diverse needs of our customers. With
              a rich history and a forward-looking approach, we strive to be
              your trusted partner in financial growth and security.
            </p>

            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Our Mission
            </h3>
            <p>
              Our mission is to empower individuals, families, and businesses to
              achieve their financial goals. We believe in delivering innovative
              solutions, personalized service, and unparalleled convenience,
              ensuring that your banking experience is seamless and rewarding.
            </p>

            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Our History
            </h3>
            <p>
              Founded in 1980, Pledge Bank has grown from a small community bank
              to a leading financial institution. Over the years, we have
              expanded our services and footprint, always staying true to our
              core values of integrity, trust, and customer-centricity. Our
              journey is marked by a commitment to excellence and a passion for
              helping our clients succeed.
            </p>

            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Our Values
            </h3>
            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Integrity: </b>We conduct our business with the highest
                ethical standards, earning the trust of our clients through
                honesty and transparency.
              </li>
              <li>
                <b>Customer Focus:</b> Your needs are our priority. We listen,
                understand, and deliver solutions that are designed specifically
                for you.
              </li>
              <li>
                <b>Innovation:</b> Embracing technology and innovation, we
                continuously improve our services to provide you with
                cutting-edge banking solutions.
              </li>
              <li>
                <b>Community Commitment:</b> We are dedicated to making a
                positive impact in the communities we serve, supporting local
                initiatives and fostering economic growth.
              </li>
            </ul>

            <h3
              style={{
                letterSpacing: '0rem',
                marginTop: '1.5rem',
                color: 'var(--clr-primary-6)',
              }}
            >
              Our Services
            </h3>
            <p>
              We offer a comprehensive range of financial products and services
              to cater to your every need:
            </p>
            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Personal Banking: </b>From savings and checking accounts to
                personal loans and mortgages, we have the right solutions to
                help you manage your finances and achieve your dreams.
              </li>
              <li>
                <b>Business Banking:</b> Our business banking services include
                checking accounts, loans, lines of credit, and cash management
                solutions designed to support businesses of all sizes.
              </li>
              <li>
                <b>Investment Services:</b> Our team of experts provides
                personalized investment advice and wealth management services to
                help you build and protect your wealth.
              </li>
              <li>
                <b>Digital Banking:</b> With our state-of-the-art online and
                mobile banking platforms, you can manage your accounts, pay
                bills, transfer funds, and more, anytime and anywhere.
              </li>
            </ul>

            <h3
              style={{
                letterSpacing: '0rem',
                marginTop: '1.5rem',
                color: 'var(--clr-primary-6)',
              }}
            >
              Why Choose Pledge Bank
            </h3>

            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Personalized Service: </b>We understand that every customer
                is unique. Our dedicated team is here to provide personalized
                guidance and support.
              </li>
              <li>
                <b>Security and Trust:</b> Your financial security is our top
                priority. We employ the latest security measures to protect your
                assets and personal information.
              </li>
              <li>
                <b>Community Engagement:</b> We believe in giving back to the
                community. Through various programs and initiatives, we
                contribute to the well-being and prosperity of our local
                communities.
              </li>

              <p>
                Join us at [Bank Name] and experience the difference of a bank
                that truly cares about your financial future. Whether you're
                opening your first account, growing your business, or planning
                for retirement, we are here to support you every step of the
                way.
              </p>
            </ul>
          </div>
        </section>

        {/* <Faqs />
        <Tab />
        <MenuTab />*/}
        <Founders />
        {/* <Carousel /> */}
      </main>
    </Wrapper>
  );
};
export default About;
