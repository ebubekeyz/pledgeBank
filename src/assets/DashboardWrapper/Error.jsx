import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  place-items: center;
  text-align: center;
  height: 50vh;
  width: 100vw;

  font-weight: bold;

  .errorElement {
    color: var(--clr-primary-1);
    font-size: 8rem;
    font-weight: 700;
  }

  .header {
    margin-top: 1rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  .text {
    line-height: 1.75rem;
    font-size: 1.125rem;
    margin-top: 1.5rem;
  }

  .link {
    margin-top: 2.5rem;
  }
  h4 {
    line-height: 2.5rem;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    .header {
      font-size: 3rem;
      line-height: 1;
    }
    img {
      width: 30rem;
    }
  }
`;

export default Wrapper;
