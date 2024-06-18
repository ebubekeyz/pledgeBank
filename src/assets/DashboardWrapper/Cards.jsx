import styled from 'styled-components';

const Wrapper = styled.div`
  .cards {
    margin: 2rem 0;
  }

  .card-main {
    display: grid;
    gap: 1rem;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    background: linear-gradient(to right, #a119, #d569);
    max-width: 37rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header p {
    color: var(--clr-white);
  }
  .mastercard {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mastercard h4 {
    color: var(--clr-white);
  }
  .card-num {
    display: flex;
    gap: 1rem;
    align-items: start;
  }
  .card-num h4 {
    color: var(--clr-white);
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .footer .name {
    color: var(--clr-grey-9);
    text-transform: capitalize;
  }

  .exp-flex {
    display: flex;
    gap: 2.5rem;
    align-items: start;
    color: var(--clr-white);
  }
  .exp-date {
    display: flex;
    justify-content: space-between;
  }
`;

export default Wrapper;
