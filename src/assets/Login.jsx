import styled from 'styled-components';

const Wrapper = styled.section`
  .login-section {
    height: 100vh;
    background: linear-gradient(rgba(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('/bank.avif') center/cover no-repeat;
  }

  .logo-img {
    width: 2rem;
  }

  .logo {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;

    position: absolute;
    top: 30%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    place-items: center;
    color: var(--clr-grey-10);
  }

  .logo span {
    font-style: italic;
    font-size: 1rem;
  }
  .logo h1 {
    font-style: italic;
    margin-top: 1rem;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .footer h3,
  h4 {
    color: var(--clr-grey-8);
    font-size: 1rem;
    letter-spacing: 0;
  }
  .form-control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 3.5rem 2rem;

    background: var(--clr-grey-1);
    transition: var(--transition);
    visibility: hidden;
  }

  .pass {
    position: relative;
  }
  .eye {
    font-size: 1rem;
    position: absolute;
    right: 1rem;
    top: 3.2rem;
    cursor: pointer;
  }

  .show {
    visibility: visible;
  }
  .sign {
    position: absolute;
    top: 50%;
    left: 50%;

    margin: 0 auto;
    transform: translate(-50%, -50%);
  }

  .sign-btn {
    text-align: center;
    padding: 0.8rem;
    width: 100%;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .arrow {
    font-size: 2rem;
    color: var(--clr-primary-4);
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .arrow-control {
    display: flex;
    justify-content: space-between;
  }

  .arrow-control h4 {
    font-size: 1.3rem;
    color: var(--clr-grey-8);
    letter-spacing: 0.1rem;
  }

  @media screen and (min-width: 990px) {
    .logo {
      top: 14%;
    }
    .arrow,
    .sign {
      display: none;
    }
    .arrow-control {
      justify-content: center;
    }
    .form-control {
      visibility: visible;
      top: 50%;
      left: 50%;
      max-width: 30rem;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.5);
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }
  .popup {
    display: grid;
    gap: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 30rem;
    background: var(--clr-white);
    padding: 2rem;
    transform: translate(-50%, -50%);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    display: none;
  }
  .popup h4 {
    text-align: center;
  }
  .close-btn {
    text-align: right;
    cursor: pointer;
  }
  .envelope {
    width: 7rem;
    margin: 0 auto;
  }
  .envelope-link {
    text-align: center;

    text-transform: capitalize;
  }

  .showPopup {
    display: grid;
  }
  .input {
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    /* border: none; */
    margin: 0.8rem 0;
    border-radius: var(--radius);
  }

  .input:focus {
    outline: none;
  }

  .input::placeholder {
    color: var(--clr-grey-7);
  }
  .label-text {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    color: var(--clr-grey-8);
  }
  @media screen and (min-width: 1300px) {
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
`;

export default Wrapper;
