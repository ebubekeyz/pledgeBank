import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .title p {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      max-width: 50rem;
      margin: 0 auto;
    }
  }
  .about {
    background: var(--clr-white);
    border-radius: var(--radius);
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .btn-container {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .tab-btn:nth-child(1) {
    border-top-left-radius: var(--radius);
  }
  .tab-btn:nth-child(3) {
    border-top-right-radius: var(--radius);
  }
  .tab-btn {
    padding: 1rem 0;
    border: none;
    text-transform: capitalize;
    font-size: 1rem;
    display: block;
    background: var(--clr-grey-9);
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .tab-btn:hover:not(.active) {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .about-content {
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    padding: 2rem 1.5rem;
  }
  /* hide content */
  .content {
    display: none;
  }
  .tab-btn.active {
    background: var(--clr-white);
  }
  .content.active {
    display: block;
  }
`;

export default Wrapper;
