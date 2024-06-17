import styled from 'styled-components';

const Wrapper = styled.div`
  .account {
    margin: 2rem 0;
  }

  .sub-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .icon {
    color: var(--clr-primary-4);
  }
  .editAccount h4,
  .security h4 {
    color: var(--clr-grey-2);
  }

  .editAccount,
  .security {
    display: flex;
    gap: 1rem;
    align-items: start;
  }
  .transfer {
    background: linear-gradient(
      to right,
      rgba(0, 100, 200, 0.5),
      rgba(0, 100, 100, 0.5)
    );
    padding: 2rem 2rem;
    overflow-x: hidden;
    border-radius: var(--radius);
    transition: var(--transition);
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 0;
    color: white;
  }
  .item {
    text-transform: capitalize;
    letter-spacing: 1;
    color: white;
  }

  .transfer:hover {
    transform: scale(1.02);
  }
  .amount,
  .name {
    letter-spacing: 0.02rem;
    font-weight: bold;
    color: var(--clr-primary-10);
  }

  .date {
    color: var(--clr-grey-9);
    letter-spacing: 0;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
  }
  /* .inner-transfer-cont {
    display: grid;
    gap: 1rem;
  } */

  .details {
    display: flex;
    align-items: start;
    align-items: center;
    column-gap: 1rem;
    max-width: 20rem;
  }
`;

export default Wrapper;
