import styled from 'styled-components';

const Wrapper = styled.div`
  .landing {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
  }

  .eye {
    cursor: pointer;
    font-size: 1.1rem;
  }

  .balance {
    text-align: center;
    color: var(--clr-grey-9);
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    );

    border-radius: var(--radius);
    padding: 3rem 0;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    height: 14.2rem;
  }
  .balance:hover {
    box-shadow: var(--dark-shadow);
  }
  .balance p {
    margin-bottom: 0.7rem;
    color: var(--clr-grey-9);
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    font-weight: bold;
  }

  .acc,
  .amount {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 0.5rem;
  }

  .services {
    text-align: center;
    transition: var(--transition);
    overflow-x: scroll;
  }

  .services::-webkit-scrollbar {
    display: none;
  }
  .icons {
    display: flex;

    padding: 0.2rem 0.5rem;
    gap: 1rem;
  }
  .ico {
    color: var(--clr-primary-7);
  }
  .inner-icon {
    padding-top: 1rem;
    border-radius: var(--radius);
    background: linear-gradient(
      to left,
      rgba(0, 100, 200, 0.5),
      rgba(0, 100, 100, 0.5)
    );
    width: 20rem;
    height: 5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .inner-icon:hover {
    transform: scale(1.02);
  }

  .inner-icon p {
    font-size: 0.8rem;
    color: var(--clr-grey-10);
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

  @media screen and (min-width: 800px) {
    .landing {
      grid-template-columns: 1fr 400px;
      align-items: start;
    }
  }
`;

export default Wrapper;
