import styled from 'styled-components';

const Wrapper = styled.section`
  .title {
    text-align: center;
  }
  .title p {
    width: 80%;
    margin: 0 auto;
  }
  .slider-container {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    max-width: 800px;
    position: relative;
    height: 450px;
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    margin: 1rem auto;
    border: 4px solid var(--primary-200);
    box-shadow: var(--shadow-3);
  }

  .name {
    text-transform: uppercase;
    color: var(--primary-500);
    margin-bottom: 0.75rem;
  }
  .title {
    text-transform: capitalize;
    color: var(--grey-700);
    margin-bottom: 0.75rem;
  }
  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 0.5rem;
    line-height: 2;
    color: var(--grey-500);
  }
  .icon {
    font-size: 3rem;
    margin-top: 1rem;
    color: var(--primary-500);
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    background: var(--clr-primary-8);
    color: var(--white);
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
