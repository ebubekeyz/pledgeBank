import styled from 'styled-components';

const Wrapper = styled.main`
  .projects-text {
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
  }
  .project {
    position: relative;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
  }
  .project-info {
    text-align: center;
    color: var(--clr-white);
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    opacity: 0;
  }
  .project-info p {
    text-transform: capitalize;
    color: var(--clr-white);
  }
  .project:hover .project-info {
    opacity: 1;
  }
  .project-img {
    -webkit-transition: var(--transition);
    transition: var(--transition);
    border-radius: var(--radius);
    height: 15rem;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .project:hover .project-img {
    opacity: 0.1;
  }
  .project::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-white);
    border-radius: var(--radius);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    opacity: 0;
  }
  .project:hover::after {
    opacity: 1;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  @media screen and (min-width: 676px) {
    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .projects-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1170px) {
    .projects-center {
      grid-template-rows: 200px 200px;
      gap: 1rem;
      grid-template-areas:
        'a b b'
        'a c d';
    }
    .project-img {
      height: 100%;
    }
    .project {
      height: 100%;
    }
    .project-1 {
      grid-area: a;
    }
    .project-2 {
      grid-area: b;
    }
    .project-3 {
      grid-area: c;
    }
    .project-4 {
      grid-area: d;
    }
  }
`;

export default Wrapper;
