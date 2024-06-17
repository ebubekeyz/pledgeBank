import styled from 'styled-components';

const Wrapper = styled.div`
  .transact {
    margin: 2rem 0;
  }

  .transfer {
    background: var(--clr-grey-10);
    padding: 2rem 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  .transfer:hover {
    transform: scale(1.02);
  }
  .amount,
  .name {
    letter-spacing: 0.08rem;
    font-size: 1rem;
  }

  .date {
    color: var(--clr-primary-4);
    letter-spacing: 0.02;
  }
  .inner-transfer-cont {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .approve {
    display: grid;
    gap: 0.5rem;
  }

  .approve h5 {
    color: green;
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
  @media screen and (min-width: 800px) {
    .transact {
      grid-template-columns: 1fr 400px;
      align-items: start;
    }
  }
`;

export default Wrapper;
