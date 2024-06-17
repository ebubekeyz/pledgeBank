import styled from 'styled-components';

const Wrapper = styled.div`
  .deposit {
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
    display: grid;
    gap: 1rem;
  }

  .details {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  .approve {
    display: grid;
    gap: 0.5rem;
  }

  .approve h5 {
    color: green;
  }

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
`;

export default Wrapper;
