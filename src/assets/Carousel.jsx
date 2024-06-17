import styled from 'styled-components';

const Wrapper = styled.section`
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

  .title2 {
    text-align: center;

    color: var(--clr-primary-5);
  }
  .title p {
    width: 80%;
    margin: 0 auto;
  }
  .slider-container {
    margin: 0rem auto;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    position: relative;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .person-img {
    object-fit: cover;
    height: 100%;
  }

  .cont {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 100%;
    padding: 100% 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    transform: translate(-50%, -50%);
  }

  .name {
    text-transform: uppercase;
  }
  .title {
    text-transform: capitalize;
    color: var(--clr-primary-10);
    font-family: var(--ff-primary);
    font-size: 3rem;
    font-weight: 700;
  }
  .text {
    max-width: 30em;
    margin: 0 auto;
    margin-bottom: 1rem;
    line-height: 2;
    color: var(--clr-primary-10);
  }
  .icon {
    font-size: 3rem;
    margin-top: 1rem;
    color: var(--clr-primary-9);
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    background: var(--clr-primary-8);
    color: var(--clr-grey-700);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-primary-10);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media screen and (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
  .next-slide {
    transform: translateX(100%);
  }

  /* ============= Slick Carousel =============== */

  .slick-container {
    margin: 0 auto;
    margin-top: 10rem;
    width: 80vw;
    max-width: 800px;
    text-align: center;
  }
  .slick-slide img {
    display: inline-block;
  }

  .slick-prev::before {
    color: var(--primary-500) !important;
  }
  .slick-next::before {
    color: var(--primary-500) !important;
  }
`;

export default Wrapper;
