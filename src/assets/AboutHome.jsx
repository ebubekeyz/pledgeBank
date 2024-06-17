import styled from 'styled-components';

const Wrapper = styled.section`
  .about-title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .about-title .underline {
    margin-left: 0;
  }
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .about-img {
    justify-self: center;
  }

  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }
  @media screen and (min-width: 992px) {
    .hero-img {
      display: block;
      position: relative;
    }
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }

    .hero-img::before,
    .about-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 85%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
    .about-center {
      grid-template-columns: 1fr 1fr;
    }
    .about-img {
      position: relative;
    }
    .about-img::before {
      left: -2rem;
    }
    .about-info {
      align-self: center;
    }
  }
`;

export default Wrapper;
