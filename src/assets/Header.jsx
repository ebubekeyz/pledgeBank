import styled from 'styled-components';

const Wrapper = styled.div`
  .hero .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-img {
    display: none;
  }
  .hero {
    background: var(--clr-primary-10);
  }
  .hero-center {
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;
  }
  .hero-info h4 {
    color: var(--clr-grey-5);
  }
  .hero-icons {
    justify-items: start;
  }
  .hero-btn {
    margin-top: 1.25rem;
  }

  .anim {
    animation: anim 3s linear 1;
  }

  @keyframes anim {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes anim2 {
    from {
      transform: scale(0.5);
      transform: skew(5deg);
    }
    to {
      transform: scale(1);
      transform: skew(0deg);
    }
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
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
      animation: anim2 3s linear 1;
    }
  }
  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
    animation: anim2 3s linear 1;
  }
`;

export default Wrapper;
