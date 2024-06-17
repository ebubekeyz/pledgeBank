import styled from 'styled-components';

const Wrapper = styled.main`
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
  @media screen and (min-width: 992px) {
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
