import styled from 'styled-components';

const Wrapper = styled.section`
  .title {
    margin-bottom: 4rem;
  }
  .title h2 {
    color: var(--clr-gold);
    font-family: 'Great Vibes', cursive;
    text-align: center;
  }
  .section-center {
    max-width: var(--fixed-width);
  }
  .question {
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    padding: 1.5rem 1.5rem 0 1.5rem;
    max-width: 50rem;
    margin: 2rem auto;
  }
  .question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    padding-bottom: 1rem;
  }

  .question-title p {
    margin-bottom: 0;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
  }
  .question-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--clr-gold);
    transition: var(--transition);
  }
  .question-btn:hover {
    transform: rotate(90deg);
  }
  .question-text {
    padding: 1rem 0 1.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .question-text p {
    margin-bottom: 0;
  }
  /* hide text */
  /* .question-text {
    display: none;
  } */
  .show-text .question-text {
    display: block;
  }
  /* .minus-icon {
    display: none;
  } */
  /* .show-text .minus-icon {
    display: inline;
  } */
  /* .show-text .plus-icon {
    display: none;
  } */
`;

export default Wrapper;
