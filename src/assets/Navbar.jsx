import styled from 'styled-components';

const Wrapper = styled.div`
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }
  .log-main {
    display: flex;
    align-items: end;
  }
  .logoMain {
    width: 5rem;
  }
  .nav-links {
    display: none;
  }
  .inner {
    color: var(--clr-primary-5);
  }
  .nav-logo {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    text-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .nav {
    height: 6rem;
    padding: 0 1rem;

    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .nav-center {
    width: 98%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
  }
  @media screen and (min-width: 768px) {
    .nav {
      background: var(--clr-primary-10);
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-items: center;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 1rem;
      justify-self: end;
    }
    .nav-links .link {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links .link:hover {
      color: #000080;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      -webkit-box-align: center;
      align-items: center;
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
    z-index: 25;
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
`;

export default Wrapper;
