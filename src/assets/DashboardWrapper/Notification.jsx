import styled from 'styled-components';

const Wrapper = styled.div`
  .form-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: var(--clr-grey-1);
    letter-spacing: 0.03rem;
    padding: 2rem;
    text-align: center;
    border-radius: var(--radius);
  }

  .show {
    display: flex;
  }

  .transfer {
    background: var(--clr-grey-10);
    padding: 2rem 2rem;

    border-radius: var(--radius);
    transition: var(--transition);
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
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
    padding-bottom: 0;
  }
  /* .inner-transfer-cont {
    display: flex;
    justify-content: space-between;
    align-items: start;
  } */

  .approve {
    display: grid;
  }

  .approve h5 {
    color: var(--clr-grey-7);
    font-size: 0.8rem;
  }
`;

export default Wrapper;
